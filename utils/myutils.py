from cryptography.hazmat.primitives import serialization, padding, hashes
from cryptography.hazmat.primitives.asymmetric import rsa, padding as asymmetric_padding
from cryptography.hazmat.backends import default_backend
import bcrypt
import rsa
import base64
import os


def bcryptHash(cadena):
    # Generar el salt (valor aleatorio) y el hash bcrypt
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(cadena.encode('utf-8'), salt)
    
    # Retornar el hash como texto
    return hashed.decode('utf-8')

def bcryptCheck(cadena, hashed):
    # Comparar el hash de la cadena con el hash dado
    return bcrypt.checkpw(cadena.encode('utf-8'), hashed.encode('utf-8'))

def rsaEncrypt(text):
    # Leer la clave pública desde el archivo
    with open('..\\..\\utils\\public_key.pem', 'rb') as f:
        public_key = rsa.PublicKey.load_pkcs1(f.read())

    # Cifrar el texto con RSA
    ciphertext = rsa.encrypt(text.encode('utf-8'), public_key)
    ciphertext_base64 = base64.b64encode(ciphertext).decode('utf-8')
    return ciphertext_base64

def rsaDecrypt(ciphertext_base64):
    # Leer la clave privada desde el archivo
    with open('..\\..\\utils\\private_key.pem', 'rb') as f:
        private_key = rsa.PrivateKey.load_pkcs1(f.read())

    # Decodificar el texto cifrado desde Base64 a bytes
    ciphertext = base64.b64decode(ciphertext_base64)

    # Descifrar el texto cifrado con RSA
    plaintext = rsa.decrypt(ciphertext, private_key)

    return plaintext.decode('utf-8')
