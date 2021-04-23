from rest_framework import serializers

from .models import *


class CombinedDataPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = CombinedDataPoint
        fields = ('year', 'protestant_percent', 'papist_percent')


class ProtestantPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProtestantPoint
        fields = ('year', 'percent')


class PapistPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = PapistPoint
        fields = ('year', 'percent')
