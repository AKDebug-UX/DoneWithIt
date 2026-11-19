import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createRequire } from 'module';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const require = createRequire(import.meta.url);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MyApp</Text>
        <MaterialCommunityIcons name="bell-outline" size={24} color="#343a40" />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Hello World</Text>

        <View style={styles.divider} />

        <Text style={styles.description}>
          This is a sample React Native application with a modern design and layout.
        </Text>

        <TouchableWithoutFeedback onPress={() => {
          console.log('pressed');
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableHighlight
          onPress={() => {
            alert('pressed');
          }}
        >
          <Image source={require('./assets/favicon.png')} style={styles.logo} />
        </TouchableHighlight>
      </View>

      <View style={styles.featuresContainer}>
        <View style={styles.featureItem}>
          <MaterialCommunityIcons name="rocket-launch" size={28} color="#4263eb" />
          <Text style={styles.featureTitle}>Fast</Text>
        </View>

        <View style={styles.featureItem}>
          <MaterialCommunityIcons name="shield-check" size={28} color="#4263eb" />
          <Text style={styles.featureTitle}>Secure</Text>
        </View>

        <View style={styles.featureItem}>
          <MaterialCommunityIcons name="cog" size={28} color="#4263eb" />
          <Text style={styles.featureTitle}>Easy</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
