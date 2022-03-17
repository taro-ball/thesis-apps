from flask import Flask
from flask import request
import random

app = Flask(__name__)


@app.route('/')
def hello():
    a=0
    n=1
    arg=request.args.get('n')
    if type(arg) == str:
      n = int(arg)
    for x in range(0, n):
      a+=random.random()*random.random()
    # https://blog.logrocket.com/build-deploy-flask-app-using-docker/
    text='The result of flsk run is : ' + str(a)
    msg=text[ 0 : 44 ]
    return msg

if __name__ == "__main__":
    from waitress import serve
    print('app started')
    serve(app, host="0.0.0.0", port=3000)