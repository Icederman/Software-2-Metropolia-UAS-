from flask import Flask,redirect

app = Flask(__name__)

@app.route('/')
def home():
    return redirect('/prime_number')

@app.route('/prime_number/<number>')
def check_prime(number):
    number = int(number)
    prime = True

    for i in range(2,number):
        if number % i == 0:
            prime = False
            break    

    if (prime == True) and number != 1 and number > 0:
        return {"Number": number, "isPrime": True}
    else:
        return {"Number": number, "isPrime": False}


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)