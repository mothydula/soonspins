from datetime import datetime as dt
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

#Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#Init db
db = SQLAlchemy(app)
#Init marshmallow
ma = Marshmallow(app)

#Twitch Username
class TwitchUserName(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    date = db.Column(db.DateTime)

    def __init__(self, username, date):
        self.username = username
        self.date = date

#TwitchUsernameSchema
class TwitchUsernameSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'current_date')

#init schema
twitchusername_schema = TwitchUsernameSchema()
twitchusernames_schema = TwitchUsernameSchema(many=True)

#create a username


@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/artists')
def get_artists():
    return {'doot doot': "Known for his impeccable taste, doot doot survived WW18", "dut dut": "He received word it was time return and this is the next installment", "deut deut": "Part three was enourmous, some say", "deuce deuce": "He switched to tennis"}

@app.route('/setTwitchUser', methods=['POST'])
def set_twitch_user():
    username = request.json['twitchUsername']
    new_twitch_username = TwitchUserName(username, dt.now())
    db.session.add(new_twitch_username)
    db.session.commit()
    return twitchusername_schema.jsonify(new_twitch_username)
@app.route('/addFeaturedArtist/<artist_data>', methods=['GET', 'POST'])
def add_featured_artist(artist_data):
    content = request.get_json(silent=True)
    print(content)
    return content

#get twitch username
@app.route('/getTwitchUser', methods=['GET'])
def get_twitch_user():
    all_twitch_users = TwitchUserName.query.all()
    result = twitchusernames_schema.dump(all_twitch_users)
    print(dt.now())
    return jsonify(result)
