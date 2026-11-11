#!/usr/bin/env python3
"""Unit tests for the DGT monthly archive discovery stage (no sales figures)."""
import unittest
from unittest.mock import patch
import io
import json
import tempfile
from pathlib import Path
from contextlib import redirect_stdout
import sys
sys.path.insert(0, str(Path(__file__).resolve().parent))
import dgt_archive_index as index

class DiscoveryTests(unittest.TestCase):
    def test_official_link_and_period(self):
        url = "https://www.dgt.es/microdatos/salida/2026/9/vehiculos/matriculaciones/export_mensual_mat_202609.zip"
        match = index.PATTERN.fullmatch(url)
        self.assertIsNotNone(match)
        year, month, code = match.groups()
        self.assertEqual(f"{year}{int(month):02d}", code)

    def test_rejects_non_official_hosts(self):
        self.assertIsNone(index.PATTERN.fullmatch("https://example.com/microdatos/salida/2026/9/vehiculos/matriculaciones/export_mensual_mat_202609.zip"))

    def test_parses_relative_archive_links(self):
        parser = index.Links()
        parser.feed('<a href="/microdatos/salida/2026/9/vehiculos/matriculaciones/export_mensual_mat_202609.zip">Septiembre</a>')
        self.assertEqual(len(parser.urls), 1)

    def test_invalid_html_never_replaces_last_good_index(self):
        class Response:
            def __enter__(self): return self
            def __exit__(self, *args): pass
            def read(self): return b'<html>No ZIP links</html>'
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "index.json"
            path.write_text('{"keep":"existing"}', encoding="utf-8")
            with patch.object(index.urllib.request, "urlopen", return_value=Response()), patch.object(sys, "argv", ["dgt_archive_index.py", "--output", str(path)]):
                with self.assertRaises(RuntimeError):
                    with redirect_stdout(io.StringIO()): index.main()
            self.assertEqual(json.loads(path.read_text(encoding="utf-8")), {"keep":"existing"})

if __name__ == "__main__":
    unittest.main()
