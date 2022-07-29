from pyexpat import model
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from app.models import Contact

class CreationUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name','last_name','username','email','password1','password2']

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['firstname','lastname','email','subject','message']