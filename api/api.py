from datetime import datetime as dt
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
from flask_marshmallow import Marshmallow
import mysql.connector
import os

#Init app
app = Flask(__name__)
"""
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

#About Section
class AboutSection(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    about_text = db.Column(db.String)
    date = db.Column(db.DateTime)

    def __init__(self, about_text, date):
        self.about_text = about_text
        self.date = date

#AboutSectionSchema
class AboutSectionSchema(ma.Schema):
    class Meta:
        fields = ('id', 'aboutText', 'current_date')

#init schema
aboutsection_schema = AboutSectionSchema()
aboutsections_schema = AboutSectionSchema(many=True)

#About Section
class PerformingArtist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    artist_name = db.Column(db.String)
    date = db.Column(db.DateTime)

    def __init__(self, artist_name, date):
        self.artist_name = artist_name
        self.date = date

#AboutSectionSchema
class PerformingArtistSchema(ma.Schema):
    class Meta:
        fields = ('id', 'artist_name', 'current_date')

#init schema
performingartist_schema = PerformingArtistSchema()
performingartists_schema = PerformingArtistSchema(many=True)

#create a username
db.create_all()
"""

mydb = mysql.connector.connect(host="34.94.174.27", user="developer", passwd="refreshe-me-bruh", database="SOONSPINS_SITE")
mycursor = mydb.cursor()


@app.route('/time')
def get_current_time():
    return {'time': dt.now()}

@app.route('/artists')
def get_artists():
    return {'darn dootin':"you\'re destidoot", 'darn doot':"you\'re destidoot", 'doot doot': "Known for his impeccable taste, doot doot survived WW18", "dut dut": "He received word it was time return and this is the next installment", "deut deut": "Part three was enourmous, some say", "deuce deuce": "He switched to tennis"}

@app.route('/setTwitchUser', methods=['POST'])
def set_twitch_user():
    username = request.json['twitchUsername']
    artists_name = request.json['artistName']
    mycursor.execute(""""INSERT INTO latestTwitchUsername (username, artistName,) VALUES ( %(username)s, %(artists_name)s, now()""",
    {'username': username,
    'artists_name': artists_name}
    )
    mycursor.close()
    mydb.close()
    
    return "worked"

#set about text
@app.route('/getAboutSection', methods=['GET'])
def set_about_section():
    mycursor.execute("select * from aboutSection ORDER BY dateAdded DESC")
    myresult = mycursor.fetchall()
    mycursor.close()
    mydb.close()
    return {'AboutText' : myresult[0][1]}

@app.route('/setAboutSection', methods=['POST'])
def get_about_section():
    mycursor.execute("INSERT INTO aboutSection (aboutText, dateAdded) VALUES ( 'this is soonspins', now())")
    mycursor.close()
    mydb.close()
    return True
"""
@app.route('/addFeaturedArtist/<artist_data>', methods=['GET', 'POST'])
def add_featured_artist(artist_data):
    content = request.get_json(silent=True)
    print(content)
    return content

#get twitch username
@app.route('/getTwitchUser', methods=['GET'])
def get_twitch_user():
    latest_twitch_user = db.session.query(TwitchUserName).order_by(desc(TwitchUserName.date)).first().username
    if db.session.query(PerformingArtist).order_by(desc(PerformingArtist.date)).first() != None:
        latest_artist_name = db.session.query(PerformingArtist).order_by(desc(PerformingArtist.date)).first().artist_name
    else:
        latest_artist_name = "placeholder"
    db.session.commit()
    print(latest_twitch_user)
    return {'TwitchUser':latest_twitch_user, 'ArtistName':latest_artist_name.upper()}
"""
