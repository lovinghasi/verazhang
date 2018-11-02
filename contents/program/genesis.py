import random
import sys

def random01():
    return random.randint(0,1)

# if 1+1 !=2 is false, it's easy, everything is normal
# but if 1+1 != 2 is true, what value should it be?
def baseRuleWhenOneMeetOne():
	# In binary
	#		0 case, 1 + 1 = 0
	#		1 case, 1 + 1 = 1
	#		2 case, 1 + 1 = 10
	while True:
		a = random01()
		a = (a<<1) ^ random01()
		if a == 0:
			return 0  
		if a == 1:
			return 1
		if a == 2:
			return 2

def ruleWhenZeroMeetZero(baseRule):
	map = {
		0: 1,
		1: 2,
		2: 0
	}
	return map.get(baseRule)

def ruleWhenZeroMeetOne(baseRule):
	map = {
		0: 2,
		1: 0,
		2: 1
	}
	return map.get(baseRule)

def mergeTwoBits(a, b):
	baseRule = baseRuleWhenOneMeetOne()
	if a== 1 and b == 1:
		return baseRule
	elif a == 0 and b == 0:
		return ruleWhenZeroMeetZero(baseRule)
	elif (a == 0 and b == 1) or (a == 1 and b == 0):
		return ruleWhenZeroMeetOne(baseRule)
	else:
		raise GenesisException("Invalid input for adding two bits.")

def mergeArrayOfBits(arrayA, arrayB):
	lenA = len(arrayA)
	lenB = len(arrayB)
	if (lenA < lenB) :
		tmp = arrayA
		arrayA = arrayB
		arrayB = tmp
		lenA = len(arrayA)
		lenB = len(arrayB)
	result = []
	for i in range(0, lenB):
		tmpBit = mergeTwoBits(arrayA[i], arrayB[i])
		currentBit = tmpBit % 2
		carry = tmpBit / 2
		result.append(currentBit)
		if carry > 0:
			arrayA = arrayA[0:i +1] + mergeArrayOfBits([1], arrayA[i+1:])
	result = result + arrayA[lenB:]
	return result
		

class GenesisException(Exception):
    pass

def add(a, b):
	if notInRange(a) or notInRange(b):
		raise GenesisException("Invalid input for addition.")
	a = bits(a)
	b = bits(b)
	a.reverse()
	b.reverse()
	result = mergeArrayOfBits(a, b)
	result.reverse()
	return decimal(result)

def notInRange(number):
	return number<0 or (not isinstance(number, int))

def bits(number):
	return [int(d) for d in str(bin(number))[2:]]

def decimal(arrayOfDigits):
	n = 0
	for d in arrayOfDigits:
		n = n *2 + d
	return n

# test the new add
for x in xrange(1,100):
	print add(2,5)


			
		
	

