
from flask import Flask, request

app = Flask(__name__)

@app.route("/solve", methods=["POST"])
def home():
    return "sdfsdfsdfsdf"
    
if __name__ == "__main__":
    app.run(debug=True)