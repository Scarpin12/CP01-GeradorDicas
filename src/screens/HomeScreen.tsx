import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

type Tip = {
  id: number;
  content: string; 
}

const motivationalTips: Tip[] = [
  { id: 1, content: "Não treine porque você odeia o seu corpo, treine porque você o ama e quer o melhor para ele." },
  { id: 2, content: "A motivação é o que te faz começar. O hábito é o que te faz continuar." },
  { id: 3, content: "Daqui a um ano, você vai desejar ter começado hoje." },
  { id: 4, content: "Sua única limitação é aquela que você impõe em sua própria mente." },
  { id: 5, content: "O treino que você não faz é o único do qual você vai se arrepender." },
  { id: 6, content: "O que você faz hoje pode melhorar todos os seus amanhãs." },
  { id: 7, content: "Falhar é a oportunidade de começar de novo com mais inteligência." },
  { id: 8, content: "Não compare o seu Capítulo 1 com o Capítulo 20 de outra pessoa. Cada um tem o seu tempo." },
  { id: 9, content: "Você não precisa ser o melhor para começar, mas precisa começar para ser um dos melhores." },
  { id: 10, content: "Foque no progresso, não na perfeição." }
];

export default function HomeScreen() {
  const [currentTip, setCurrentTip] = useState<Tip | null>(null);

  const generateRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * motivationalTips.length);
    setCurrentTip(motivationalTips[randomIndex]);
  };

  useEffect(() => {
    generateRandomTip();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <Text style={styles.headerTitle}>Gerador de Dicas</Text>

        <View style={styles.cardContainer}>
          <View style={styles.iconPlaceholder}>
             <Text style={styles.iconText}>💡</Text> 
          </View>
          
          <Text style={styles.tipText}>
            {currentTip?.content}
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={generateRandomTip}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Nova dica</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1,
  backgroundColor: '#EBF4FF' },

  container: { flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 20 },

  headerTitle: { 
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A202C', 
    marginTop: 20 },

  cardContainer: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    paddingHorizontal: 30,
    paddingBottom: 40,
    paddingTop: 50,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 4,
    minHeight: 220,
    justifyContent: 'center',
    position: 'relative' },

  iconPlaceholder: { 
    backgroundColor: '#FEF08A',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute',
    top: -30,
    borderWidth: 4,
    borderColor: '#EBF4FF' },
 

  iconText: { fontSize: 26 },

  tipText: { fontSize: 16,
     color: '#4A5568',
      textAlign: 'center',
       lineHeight: 24,
        fontWeight: '500' },

  button: { backgroundColor: '#3B82F6',
     width: '100%',
      paddingVertical: 18,
       borderRadius: 16,
        alignItems: 'center',
         marginBottom: 20 },

  buttonText: { color: '#FFFFFF',
     fontSize: 16,
      fontWeight: 'bold' }
});