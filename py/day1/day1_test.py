from day1 import addUpToK

def test_day1_1():
    assert addUpToK([10, 15, 3, 7],17) == True
    
def test_day1_2():
    assert addUpToK([2,3],5) == True

def test_day1_5():
    assert addUpToK([],0) == False 

def test_day1_6():
    assert addUpToK([2],4) == False

