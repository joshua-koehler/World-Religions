from django.db import models

# Create your models here.
from django.db import models


class CombinedDataPoint(models.Model):
    year = models.IntegerField()
    protestant_percent = models.FloatField()
    papist_percent = models.FloatField()

    def __str__(self):
        return str(self.year) + " - COMBINED - protestant = " + self.protestant_percent.__str__() + " - papist = " + self.papist_percent.__str__()


class ProtestantPoint(models.Model):
    year = models.IntegerField()
    percent = models.FloatField()

    def __str__(self):
        return str(self.year) + " - PROTESTANT = " + self.percent.__str__()


class PapistPoint(models.Model):
    year = models.IntegerField()
    percent = models.FloatField()

    def __str__(self):
        return str(self.year) + " - PAPIST = " + self.percent.__str__()
