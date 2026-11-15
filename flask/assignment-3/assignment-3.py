from flask import Flask, Response, redirect, request
import json

app = Flask(__name__)

with open('dictionary.json', encoding='utf-8') as f:
    dic = json.load(f)

@app.route('/add')
def add():
   en = request.args.get("en")
   fi = request.args.get("fi")

   if not en or not fi:
     response = {
        "error": "Empty",
        "status": 400
     }
     json_response = json.dumps(response)
     http_response = Response(response=json_response, status=400, mimetype="application/json")
     return http_response
    
   else:
      dic[en] = fi
      with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(dic, file, ensure_ascii=False, indent=2)
      return dic
   


    
    
if __name__ == '__main__':
        app.run(use_reloader=True, host='127.0.0.1', port=3000)