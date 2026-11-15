from flask import Flask, Response, redirect
import json

app = Flask(__name__)

with open('dictionary.json', encoding='utf-8') as f:
    dic = json.load(f)

@app.route('/')
def home():
     return redirect('/translate')

@app.route('/translate/<word>')
def translate(word):
    try:
        response = {
            "English": word,
            "Finnish": dic[word]
        }
        return response
    
    except KeyError:
        response = {
            "error": "Word not found",
            "status": 400
        }
        json_response = json.dumps(response)
        http_response = Response(response=json_response, status=400, mimetype="application/json")
        return http_response

    
    
if __name__ == '__main__':
        app.run(use_reloader=True, host='127.0.0.1', port=3000)