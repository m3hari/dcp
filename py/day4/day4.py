def missing_minimum_positive_integer(numbers):
    min_num = 1
    lookup = set(numbers)
    while (min_num in lookup):
        min_num +=1
    return min_num
    