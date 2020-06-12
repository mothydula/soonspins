import time
from flask import Flask


app = Flask(__name__)


@app.route('/time')

def get_current_time():
    return {'time': time.time()}

@app.route('/artists')
def get_artists():
    return {'doot doot': "Known for his impeccable taste, doot doot survived WW18", "dut dut": "He received word it was time return and this is the next installment", "deut deut": "Part three was enourmous, some say", "deuce deuce": "He switched to tennis"}