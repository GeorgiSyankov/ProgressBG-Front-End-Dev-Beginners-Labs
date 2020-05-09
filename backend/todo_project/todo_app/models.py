from django.db import models
from django.utils import timezone
from datetime import datetime


def days_from_now_1():
  return timezone.now() + timezone.timedelta(days=1)

# Create your models here.
class Todo(models.Model):
  id = models.AutoField(primary_key=True)
  title = models.CharField('Title', max_length=100, help_text="Todo Title")
  description = models.TextField('Description', null=True, help_text="Todo Description")
  completed = models.BooleanField(default=False)

  due = models.DateTimeField('due', default=days_from_now_1, help_text="Todo Due (default - 1 day from now)")
  created = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return f"{self.title} - {self.description}"

