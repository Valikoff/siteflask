from flask import Flask
from flask_admin import Admin


app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


admin = Admin(app, name='Flask', template_mode='bootstrap3')

if __name__ == '__main__':
    app.run()
