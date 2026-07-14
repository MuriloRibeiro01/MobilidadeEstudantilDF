import { ScrollView, Text, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import input from "@/components/input";


export default function LoginScreen() {

    const safeAreaInsets = useSafeAreaInsets();
    const insets = {
        ...safeAreaInsets,
        bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
    };
    const theme = useTheme();

    const contentPlatformStyle = Platform.select({
        android: {
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
        },
        web: {
            paddingTop: Spacing.six,
            paddingBottom: Spacing.four,
        },
    });

    return (
        <ScrollView
            style={[styles.scrollView, {backgroundColor: theme.background}]}
            contentInset={insets}
            contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
            <ThemedView
                style={styles.viewContainer}
            >
                <ThemedText>
                    Faça seu Login
                </ThemedText>
                <ThemedView style={[styles.loginCampo, {backgroundColor: theme.background}]}>
                    <label htmlFor="input" style={styles.inputLabel}>Matrícula</label>
                    <input 
                        type="text"
                        style={styles.inputCampo}
                    />
                </ThemedView>
                <ThemedView style={[styles.loginCampo, {backgroundColor: theme.background}]}>
                    <label htmlFor="input" style={styles.inputLabel}>Senha</label>
                    <input
                        type="text"
                        style={styles.inputCampo}/>
                </ThemedView>
                
            </ThemedView>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    scrollView: {

    },
    contentContainer: {
        alignItems: 'center',
    },
    viewContainer: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#212225',
        width: 200,
        borderRadius: 8,
        marginTop: 8
    },
    inputCampo: {
        width: 100,
        borderRadius: 8,
        height: 20,
    },
    inputLabel: {
        color: '#fff',
        margin: 5,
    },
    loginCampo: {
        margin: 5,
        padding: 5,
    },
})