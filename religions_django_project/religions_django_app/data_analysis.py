import csv
from sklearn.preprocessing import PolynomialFeatures
import math
import numpy as np
from matplotlib import pyplot as plt
from sklearn.linear_model import LinearRegression

def extract_data():
    religion = "/home/joshua/PycharmProjects/religions/religions_django_project/religions_django_app/National_World_Religions_1945-2010.csv"
    mexico_data = []
    with open(religion) as religions:
        read = csv.reader(religions, delimiter=',')
        header = next(read)
        for row in read:
            if (row[1] == "Mexico"):
                mexico_data.append(row)

    protestant_col = 40
    romancatholic_col = 41

    romancatholic_percent_values = []
    protestant_percent_values = []
    years = []
    i = 1945
    for row in mexico_data:
        years.append(i)
        i += 5
        romancatholic_percent_values.append(float(row[romancatholic_col]))
        protestant_percent_values.append(float(row[protestant_col]))

    years = np.array(years).reshape(-1, 1)
    protestant_percent_values = np.array(protestant_percent_values).reshape(-1, 1)
    romancatholic_percent_values = np.array(romancatholic_percent_values).reshape(-1, 1)

    return protestant_percent_values, romancatholic_percent_values, years

def build_protestant_model():
    protestant_percent_values, romancatholic_percent_values, years = extract_data()

    pf = PolynomialFeatures(degree=2, include_bias=False)
    years_poly = pf.fit_transform(years)

    lin_reg = LinearRegression()
    lin_reg.fit(years_poly, protestant_percent_values)
    protestant_poly_prediction = lin_reg.predict(years_poly)

    return lin_reg, protestant_poly_prediction

def build_papist_model():
    protestant_percent_values, papist_percent_values, years = extract_data()

    pf = PolynomialFeatures(degree=2, include_bias=False)
    years_poly = pf.fit_transform(years)

    lin_reg = LinearRegression()
    lin_reg.fit(years_poly, papist_percent_values)
    papist_poly_prediction = lin_reg.predict(years_poly)

    return lin_reg, papist_poly_prediction

def predict_population_percentage(lin_reg, year):
    ans = lin_reg.intercept_
    i = 1
    for coef in lin_reg.coef_[0]:
        ans += coef*math.pow(year, i)
        i += 1
    return ans

def predict_protestant_percentage(year):
    lin_reg, protestant_poly_prediction = build_protestant_model()
    return predict_population_percentage(lin_reg, year)

def predict_papist_percentage(year):
    lin_reg, papist_poly_prediction = build_papist_model()
    return predict_population_percentage(lin_reg, year)

def get_protestant_and_papist_percentages_through_2050():
    protestant_percent_values, papist_percent_values, years = extract_data()  # through 2010

    years = years.tolist()
    protestant_percent_values = protestant_percent_values.tolist()
    papist_percent_values = papist_percent_values.tolist()

    start = 2015

    # get 2010 through 2050
    for year in range(start, 2055, 5):
        years.append([year])
        protestant_percent_values.append(predict_protestant_percentage(year))
        papist_percent_values.append(predict_papist_percentage(year))

    print(years)
    print(protestant_percent_values)
    print("------------")

    return protestant_percent_values, papist_percent_values, years


