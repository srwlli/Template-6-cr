from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='minimalist-template')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
