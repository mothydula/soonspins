from datetime import datetime as dt
from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
from flask_marshmallow import Marshmallow
from google.cloud import storage
import mysql.connector
import pymysql.cursors
import os

#Init app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, 'soonspins-site-98aa805e42a7.json')
storage_client = storage.Client.from_service_account_json(filename)
bucket = storage_client.get_bucket("soonspins_site_images")
APP_ROOT = os.path.dirname(os.path.abspath(__file__))

@app.route("/")
@cross_origin()
def index():
    return jsonify({"response": "This is a proof of concept"})

@app.route('/time')
@cross_origin()
def get_current_time():
    return {'time': dt.now()}

@app.route('/artists')
@cross_origin()
def get_artists():
    return {'darn dootin':"you\'re destidoot", 'darn doot':"you\'re destidoot", 'doot doot': "Known for his impeccable taste, doot doot survived WW18", "dut dut": "He received word it was time return and this is the next installment", "deut deut": "Part three was enourmous, some say", "deuce deuce": "He switched to tennis"}

@app.route('/setTwitchUser', methods=['POST'])
@cross_origin()
def set_twitch_user():
    connection = pymysql.connect(host="34.94.174.27", user="root", database="SOONSPINS_SITE", ssl={'ssl' : {'ca': '/server-ca.pem', 'key': '/client-key.pem', 'cert': '/client-cert.pem', }}, cursorclass=pymysql.cursors.DictCursor)
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
@cross_origin()
def get_twitch_user():
    connection = pymysql.connect(host="34.94.174.27", user="root", database="SOONSPINS_SITE", ssl={'ssl' : {'cert': 'client-cert.pem', 'key': 'client-key.pem', 'ca': 'server-ca.pem'}}, cursorclass=pymysql.cursors.DictCursor)
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
@cross_origin()
def get_about_section():
    connection = pymysql.connect(host="34.94.174.27", user="timothylukau", password="only-you", database="SOONSPINS_SITE", ssl={'ssl' : {'ca': '/certs/server-ca.pem', 'key': '/certs/client-key.pem', 'cert': '/certs/client-cert.pem'}}, cursorclass=pymysql.cursors.DictCursor)
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
@cross_origin()
def set_about_section():
    connection = pymysql.connect(host="34.94.174.27", user="root", database="SOONSPINS_SITE", cursorclass=pymysql.cursors.DictCursor)
    about_text = request.json["aboutText"]
    try:
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO aboutSection (aboutText, dateAdded) VALUES ( '{}', {})".format(about_text, 'now()'))
        connection.commit()
        connection.close()
        return "success"
    except:
        return "failed"

@app.route("/upload", methods=["POST", "GET"])
@cross_origin()
def upload():
    #folder_name = request.form['templates']
    #print(folder_name)
    
    print(request.form['eventTitle'])
    print(request.form['descriptionText'])
    print(request.form['mixcloudCode'])

    return {'nothing': 'nothing'}
    '''
    # this is to verify that folder to upload to exists.
    if os.path.isdir(os.path.join(APP_ROOT, 'files/{}'.format(folder_name))):
        print("folder exist")
    '''
    """"
    target = os.path.join(APP_ROOT, 'templates/')
    print(target)
    if not os.path.isdir(target):
        os.mkdir(target)
    print(request.files.getlist("file"))
    for upload in request.files.getlist("file"):
        print(upload)
        print("{} is the file name".format(upload.filename))
        filename = upload.filename
        # This is to verify files are supported
        ext = os.path.splitext(filename)[1]
        if (ext == ".jpg") or (ext == ".png"):
            print("File supported moving on...")
        else:
            render_template("Error.html", message="Files uploaded are not supported...")
        destination = "/".join([target, filename])
        print("Accept incoming file:", filename)
        print("Save it to:", destination)
        upload.save(destination)

    # return send_from_directory("images", filename, as_attachment=True)
    return render_template("complete.html", image_name=filename)
    """
    return str(request.files)

@app.route('/gallery')
def get_gallery():
    image_names = os.listdir('./images')
    print(image_names)
    return render_template("gallery.html", image_names=image_names)


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
