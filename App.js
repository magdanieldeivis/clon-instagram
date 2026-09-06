import './global.css';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, Pressable, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const containerClass = Platform.OS === 'web' 
    ? "flex-1 bg-zinc-950 items-center justify-center h-screen" 
    : "flex-1 bg-black";

  const phoneClass = Platform.OS === 'web'
    ? "w-[400px] h-[85vh] bg-black rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl flex flex-col"
    : "flex-1 bg-black flex flex-col";

  return (
    <SafeAreaView className={containerClass}>
      <StatusBar style="light" />

      <View className={phoneClass}>
        {/* CONTENIDO SEGÚN LA PANTALLA ACTIVA */}
        {activeTab === 0 && (
          <ScrollView className="flex-1 bg-black">
            {/* Cabecera Superior */}
            <View className="flex-row items-center justify-between px-4 py-3 border-b border-zinc-900">
              <Text className="text-lg font-black tracking-tight text-white">deivis_dev</Text>
              <View className="flex-row gap-5">
                <Text className="text-xl">➕</Text>
                <Text className="text-xl">☰</Text>
              </View>
            </View>

            {/* Información del Perfil */}
            <View className="px-4 py-4 flex-row items-center justify-between">
              <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/9919?v=4' }} 
                className="w-20 h-20 rounded-full border border-zinc-700"
              />
              <View className="flex-row flex-1 justify-around ml-4">
                <View className="items-center">
                  <Text className="font-bold text-base text-white">12</Text>
                  <Text className="text-xs text-zinc-400">posts</Text>
                </View>
                <View className="items-center">
                  <Text className="font-bold text-base text-white">1,280</Text>
                  <Text className="text-xs text-zinc-400">seguidores</Text>
                </View>
                <View className="items-center">
                  <Text className="font-bold text-base text-white">340</Text>
                  <Text className="text-xs text-zinc-400">siguiendo</Text>
                </View>
              </View>
            </View>

            {/* Biografía */}
            <View className="px-4 pb-3">
              <Text className="font-bold text-sm text-white">Deivis Xavier Magdaniel</Text>
              <Text className="text-xs text-zinc-300 mt-0.5">Systems Engineering Student 💻</Text>
              <Text className="text-xs text-zinc-300">React Native & Tailwind CSS dev 🚀</Text>
              <Text className="text-xs text-blue-400 font-medium mt-1">github.com/deivis</Text>
            </View>

            {/* Botones de Acción */}
            <View className="px-4 flex-row gap-2 mb-4">
              <Pressable className="flex-1 bg-zinc-900 py-2 rounded-lg items-center border border-zinc-800 active:opacity-60">
                <Text className="text-xs font-bold text-white">Editar perfil</Text>
              </Pressable>
              <Pressable className="flex-1 bg-zinc-900 py-2 rounded-lg items-center border border-zinc-800 active:opacity-60">
                <Text className="text-xs font-bold text-white">Compartir perfil</Text>
              </Pressable>
              <Pressable className="bg-zinc-900 px-3 py-2 rounded-lg items-center border border-zinc-800 active:opacity-60">
                <Text className="text-xs font-bold text-white">👤+</Text>
              </Pressable>
            </View>

            {/* Pestañas de la cuadrícula */}
            <View className="flex-row border-t border-zinc-900">
              <View className="flex-1 py-3 items-center border-b-2 border-white">
                <Text className="text-sm">📷</Text>
              </View>
              <View className="flex-1 py-3 items-center opacity-40">
                <Text className="text-sm">🏷️</Text>
              </View>
            </View>

            {/* Cuadrícula de Publicaciones */}
            <View className="flex-row flex-wrap">
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=500&auto=format&fit=crop' }}
                className="w-1/3 aspect-square border-r border-b border-black"
              />
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop' }}
                className="w-1/3 aspect-square border-r border-b border-black"
              />
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format&fit=crop' }}
                className="w-1/3 aspect-square border-b border-black"
              />
            </View>
          </ScrollView>
        )}

        {activeTab === 1 && (
          // PANTALLA 2: BÚSQUEDA CON INPUT FUNCIONAL
          <View className="flex-1 pt-3 bg-black">
            <View className="px-4 mb-3">
              <View className="bg-zinc-900 rounded-xl px-3 py-2 flex-row items-center border border-zinc-800">
                <Text className="mr-2 text-zinc-500">🔍</Text>
                <TextInput
                  placeholder="Buscar fotos, reels o usuarios..."
                  className="text-sm text-white flex-1"
                  placeholderTextColor="#71717a"
                />
              </View>
            </View>
            <ScrollView className="flex-1">
              <View className="flex-row flex-wrap">
                <Image source={{ uri: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=500&auto=format&fit=crop' }} className="w-1/3 aspect-square border border-black" />
                <Image source={{ uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop' }} className="w-1/3 aspect-square border border-black" />
                <Image source={{ uri: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format&fit=crop' }} className="w-1/3 aspect-square border border-black" />
                <Image source={{ uri: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop' }} className="w-1/3 aspect-square border border-black" />
                <Image source={{ uri: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop' }} className="w-1/3 aspect-square border border-black" />
                <Image source={{ uri: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=500&auto=format&fit=crop' }} className="w-1/3 aspect-square border border-black" />
              </View>
            </ScrollView>
          </View>
        )}

        {activeTab === 2 && (
          // PANTALLA 3: NOTIFICACIONES CON TÍTULO SUPERIOR
          <View className="flex-1 pt-3 px-4 bg-black">
            <Text className="text-xl font-bold mb-4 text-white">Notificaciones</Text>
            <ScrollView className="flex-1">
              <View className="flex-row items-center py-2.5">
                <View className="w-11 h-11 bg-zinc-800 rounded-full mr-3 items-center justify-center border border-zinc-700">
                  <Text className="font-bold text-xs text-white">DX</Text>
                </View>
                <Text className="flex-1 text-xs text-zinc-300 leading-4">
                  <Text className="font-bold text-white">user_dev</Text> comenzó a seguirte. <Text className="text-zinc-500">3h</Text>
                </Text>
                <Pressable className="bg-blue-600 px-4 py-1.5 rounded-lg active:opacity-60">
                  <Text className="text-white text-xs font-bold">Seguir</Text>
                </Pressable>
              </View>
              <View className="flex-row items-center py-2.5">
                <View className="w-11 h-11 bg-zinc-800 rounded-full mr-3 items-center justify-center border border-zinc-700">
                  <Text className="font-bold text-xs text-white">JS</Text>
                </View>
                <Text className="flex-1 text-xs text-zinc-300 leading-4">
                  <Text className="font-bold text-white">react_lover</Text> le gustó tu publicación. <Text className="text-zinc-500">1d</Text>
                </Text>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=500&auto=format&fit=crop' }} className="w-10 h-10 rounded-md" />
              </View>
            </ScrollView>
          </View>
        )}

        {/* BARRA DE NAVEGACIÓN INFERIOR */}
        <View className="flex-row justify-around items-center border-t border-zinc-900 py-3 bg-black">
          <Pressable onPress={() => setActiveTab(0)} className="items-center">
            <Text className="text-2xl">{activeTab === 0 ? '🛖' : '🛖'}</Text>
          </Pressable>
          <Pressable onPress={() => setActiveTab(1)} className="items-center">
            <Text className="text-2xl">{activeTab === 1 ? '🔍' : '🔍'}</Text>
          </Pressable>
          <Pressable onPress={() => setActiveTab(2)} className="items-center">
            <Text className="text-2xl">{activeTab === 2 ? '❤️' : '🤍'}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}