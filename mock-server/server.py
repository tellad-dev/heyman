#!/usr/bin/env python3

from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import time
import json
from os import path


class S(BaseHTTPRequestHandler):
    def _response_json(self, filePath):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

        with open(filePath, 'rb') as file:
            self.wfile.write(file.read())

    def do_GET(self):
        o = urlparse(self.path)
        query = parse_qs(o.query)

        if o.path == '/api/v1/store/customer':
            self._response_json('data/customer.json')

    def _send_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        self.send_header("Access-Control-Allow-Headers",
                         "x-api-key,Content-Type")

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def do_POST(self):
        o = urlparse(self.path)


def run(server_class=HTTPServer, handler_class=S, port=1333):
    server_address = ('127.0.0.1', port)
    httpd = server_class(server_address, handler_class)
    try:
        print('http://localhost:' + str(port))
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()


if __name__ == '__main__':
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
