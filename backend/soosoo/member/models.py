from django.db import models

# Create your models here.

class Member(models.Model):
    # Property
    username = models.CharField(max_length=10)
    password = models.CharField(max_length=10)
    name = models.TextField()
    email = models.EmailField()

    class Meta:
        managed = True
        df_table ='members'