from datetime import datetime as dt
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
from flask_marshmallow import Marshmallow
import mysql.connector
import pymysql.cursors
import os

#Init app
app = Flask(__name__)



@app.route('/time')
def get_current_time():
    return {'time': dt.now()}

@app.route('/artists')
def get_artists():
    return {'darn dootin':"you\'re destidoot", 'darn doot':"you\'re destidoot", 'doot doot': "Known for his impeccable taste, doot doot survived WW18", "dut dut": "He received word it was time return and this is the next installment", "deut deut": "Part three was enourmous, some say", "deuce deuce": "He switched to tennis"}

@app.route('/setTwitchUser', methods=['POST'])
def set_twitch_user():
    connection = pymysql.connect(host="34.94.174.27", user="developer", passwd="refreshe-me-bruh", database="SOONSPINS_SITE", cursorclass=pymysql.cursors.DictCursor)
    username = request.json['twitchUsername']
    artists_name = request.json['artistName']
    try:
        with connection.cursor() as cursor:
            sql = ("INSERT INTO twitchArtists (username, artistName, dateAdded) VALUES ('{}', '{}', {})".format(username, artists_name, 'now()'))
            cursor.execute(sql)
        connection.commit()
        connection.close()
        return "success"
    except:
        print("SQL problem has occured")
        return "failed"

@app.route('/getTwitchUser', methods=['GET'])
def get_twitch_user():
    connection = pymysql.connect(host="34.94.174.27", user="developer", passwd="refreshe-me-bruh", database="SOONSPINS_SITE", cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            cursor.execute("select * from twitchArtists ORDER BY dateAdded DESC limit 0,1")
            result = cursor.fetchone()
        connection.close()
        return result
    except:
        print("SQL problem has occured")
        return "failed"

@app.route('/getAboutSection', methods=['GET'])
def get_about_section():
    connection = pymysql.connect(host="34.94.174.27", user="developer", passwd="refreshe-me-bruh", database="SOONSPINS_SITE", cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            cursor.execute("select * from aboutSection ORDER BY dateAdded DESC limit 0,1")
            result = cursor.fetchone()
        connection.close()
        return result
    except:
            print("SQL problem has occured")
            return "failed"

@app.route('/setAboutSection', methods=['POST'])
def set_about_section():
    connection = pymysql.connect(host="34.94.174.27", user="developer", passwd="refreshe-me-bruh", database="SOONSPINS_SITE", cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO aboutSection (aboutText, dateAdded) VALUES ( 'this is soonspins', now())")
        connection.commit()
        connection.close()
        return "success"
    except:
        return "failed"
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
