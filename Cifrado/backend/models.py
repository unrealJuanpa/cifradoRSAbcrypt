from peewee import *

db = MySQLDatabase('dbcifrarcontra', user='root', password='', host='localhost', port=3306)

class usuario(Model):
    user = CharField()
    password =CharField()
    
    class Meta: 
        database = db