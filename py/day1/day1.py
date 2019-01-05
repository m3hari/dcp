def addUpToK(numbers, k):
    visited = set()
    for num in numbers:
        if(k-num in visited):
             return True
        visited.add(num)
    return False