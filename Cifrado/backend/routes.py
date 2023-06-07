from flask import Blueprint, jsonify, request
from models import *
import jwt
from datetime import datetime, timedelta
import hashlib
import sys

sys.path.append("..\\..\\utils\\")
import myutils

rutas = Blueprint('example', __name__)

@rutas.route('/usuario', methods=['POST'])
@rutas.route('/usuario/<us>/<pas>', methods=['GET'])
def manage_usuarios(us = None, pas = None):
    try:
        if request.method == 'GET':            
            ret=list(usuario.select().dicts())

            for i in range(len(ret)):
                ret[i]['user'] = myutils.rsaDecrypt(ret[i]['user'])
                ret[i]['password'] = myutils.rsaDecrypt(ret[i]['password'])

            ret = [c for c in ret if myutils.bcryptCheck(pas, c['password']) and c['user'] == us]

            if len(ret) == 0:
                return jsonify({"message": "ERROR: credenciales incorrectas o usuario inexistente!"})

            return jsonify({'message': 'INFO: Logueado con exito!'})
        
        elif request.method == 'POST':
            data = request.get_json()
            
            if len([0 for i in list(usuario.select().dicts()) if myutils.rsaDecrypt(i['user']) == data['user']]) == 0:
                data['user'] = myutils.rsaEncrypt(data['user'])
                data['password'] = myutils.rsaEncrypt(myutils.bcryptHash(data['password']))
                usuario.create(**data)
                return jsonify({'message': 'INFO: usuario creado con exito'})
            else: 
                return jsonify({'message': 'ERROR: el usuario especificado ya existe'})
    except Exception as e:
        return jsonify({'message': 'ERROR: ' + str(e)})
