import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const CostComparisonApp = () => {
  const [gasPrice, setGasPrice] = useState('');
  const [gasMileage, setGasMileage] = useState('');
  const [electricPrice, setElectricPrice] = useState('');
  const [electricMileage, setElectricMileage] = useState('');
  const [drivenPerYear, setDrivenPerYear] = useState('');

  const calculateCarResults = () => {
    const gasCarDistance = parseFloat(gasMileage);
    const electricCarDistance = parseFloat(electricMileage) * (parseFloat(gasPrice) / parseFloat(electricPrice));
    const additionalDistance = electricCarDistance - gasCarDistance;
    const gasCost = parseFloat(gasPrice) * (parseFloat(drivenPerYear) / parseFloat(gasMileage));
    const electricCost = parseFloat(electricPrice) * (parseFloat(drivenPerYear) / parseFloat(electricMileage));
    const savings = gasCost - electricCost;

    return {
      gasCost,
      electricCost,
      savings,
      gasCarDistance,
      electricCarDistance,
      additionalDistance,
    };
  };

  const CalculateCost = () => {
    const { gasCost, electricCost, savings ,gasCarDistance,electricCarDistance,additionalDistance} = calculateCarResults();
  alert(`Gas Car Cost: $${gasCost.toFixed(2)}
Electric Car Cost: $${electricCost.toFixed(2)}
Estimated Savings: $${savings.toFixed(2)}
Distance gas can travel : $${gasCarDistance.toFixed(2)}
Distance electirc car can travel : $${electricCarDistance.toFixed(2)}
How much further car can trvel: $${additionalDistance.toFixed(2)}`)
;
  };

  return (
    <View style={{flex: 1,
      padding: 20}}>
      <Text style={{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',}}>Car Cost Comparison</Text>

      <Text style={{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  }}>Gas Car Information</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginVertical: 5,
        }}
        placeholder="Cost of 1 L of gas ($/L)"
        onChangeText={(value) => setGasPrice(value)}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginVertical: 5,
        }}
        placeholder="Gas car mileage (km/L)"
        onChangeText={(value) => setGasMileage(value)}
      />

      <Text style={{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  }}>Electric Car Information</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginVertical: 5,
        }}
        placeholder="Cost of 1 kwH of electricity ($/kwH)"
        onChangeText={(value) => setElectricPrice(value)}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginVertical: 5,
        }}
        placeholder="Electric car mileage (km/kwH)"
        onChangeText={(value) => setElectricMileage(value)}
      />

      <Text style={{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  }}>Number of km driven per year</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginVertical: 5,
        }}
        placeholder="Enter km per year"
        onChangeText={(value) => setDrivenPerYear(value)}
      />

      <TouchableOpacity style={{
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  }} onPress={CalculateCost}>
        <Text style={{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

