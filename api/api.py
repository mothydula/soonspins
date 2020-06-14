import time
from flask import Flask
from flask import request

app = Flask(__name__)


@app.route('/time')

def get_current_time():
    return {'time': time.time()}

@app.route('/artists')
def get_artists():
    return {'doot doot': "Known for his impeccable taste, doot doot survived WW18", "dut dut": "He received word it was time return and this is the next installment", "deut deut": "Part three was enourmous, some say", "deuce deuce": "He switched to tennis"}

@app.route('/setTwitchUser/<twitch_username>', methods=['GET', 'POST'])
def get_twitch_user(twitch_username):
    content = request.get_json(silent=True)
    print(content["twitchUsername"])
    return content

@app.route('/addFeaturedArtist/<artist_data>', methods=['GET', 'POST'])
def add_featured_artist(artist_data):
    content = request.get_json(silent=True)
    print(content)
    return content
