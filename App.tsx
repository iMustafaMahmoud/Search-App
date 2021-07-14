import React from "react";
import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppNavigator } from "./Infrastructure/app.navigation";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});
