from day4 import missing_minimum_positive_integer

def test_day4_1():
    assert missing_minimum_positive_integer([3, 4, -1,1]) == 2

def test_day4_2():
    assert missing_minimum_positive_integer([1,2,0]) == 3

def test_day4_3():
    assert missing_minimum_positive_integer([-2,-3,-3,0]) == 1

    