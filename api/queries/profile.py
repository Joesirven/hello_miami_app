from enum import Enum

from tortoise import fields
from tortoise.models import Model

class Users(Model):
    id = fields.IntField(pk=True)
    first_name = fields.CharField(max_length=50)
    last_name = fields.CharField(max_length=50)
    email = fields.CharField(max_length=50)
    phone = fields.CharField(max_length=20)
    hashed_password = fields.CharField(max_length=128)
    phone = fields.CharField(max_length=20)

    class Meta:
        table = "users"
