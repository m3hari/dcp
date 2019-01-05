def product_of_all_other(numbers):
    result = []
    for i in range(len(numbers)):
        result.append(1)
        for j in range(len(numbers)):
            num = numbers[j]
            if i!=j:
                result[i] *= num   
    return result