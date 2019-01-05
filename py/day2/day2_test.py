from day2 import product_of_all_other

def test_day2_1():
    assert product_of_all_other([1, 2, 3, 4, 5]) == [120, 60, 40, 30, 24]
    
def test_day2_2():
    assert product_of_all_other([]) == []
    
def test_day2_3():
    assert product_of_all_other([1, 2, 3]) == [6,3,2]
