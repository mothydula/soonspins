import time
from flask import Flask


app = Flask(__name__)


@app.route('/time')

def get_current_time():
    return {'time': time.time()}

@app.route('/artists')
def get_artists():
    return {'guy1': "im guy 1", "guy2": "im guy 2", "so_on": "Im and so on...", "so forth": "tell em"}