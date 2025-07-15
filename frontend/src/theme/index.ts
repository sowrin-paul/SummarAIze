import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    recipes: {
      button: {
        base: {
          fontWeight: "semibold",
          borderRadius: "lg",
        },
        variants: {
          solid: {
            blue: {
              bg: "blue.500",
              color: "white",
              _hover: { bg: "blue.600" },
              _active: { bg: "blue.700" },
            },
            purple: {
              bg: "purple.500",
              color: "white",
              _hover: { bg: "purple.600" },
              _active: { bg: "purple.700" },
            },
            green: {
              bg: "green.500",
              color: "white",
              _hover: { bg: "green.600" },
              _active: { bg: "green.700" },
            },
            orange: {
              bg: "orange.500",
              color: "white",
              _hover: { bg: "orange.600" },
              _active: { bg: "orange.700" },
            },
            pink: {
              bg: "pink.500",
              color: "white",
              _hover: { bg: "pink.600" },
              _active: { bg: "pink.700" },
            },
            teal: {
              bg: "teal.500",
              color: "white",
              _hover: { bg: "teal.600" },
              _active: { bg: "teal.700" },
            },
          },
          outline: {
            blue: {
              borderColor: "blue.500",
              color: "blue.500",
              _hover: { 
                bg: "blue.50", 
                _dark: { bg: "blue.900" } 
              },
              _active: { 
                bg: "blue.100", 
                _dark: { bg: "blue.800" } 
              },
            },
            purple: {
              borderColor: "purple.500",
              color: "purple.500",
              _hover: { 
                bg: "purple.50", 
                _dark: { bg: "purple.900" } 
              },
              _active: { 
                bg: "purple.100", 
                _dark: { bg: "purple.800" } 
              },
            },
            green: {
              borderColor: "green.500",
              color: "green.500",
              _hover: { 
                bg: "green.50", 
                _dark: { bg: "green.900" } 
              },
              _active: { 
                bg: "green.100", 
                _dark: { bg: "green.800" } 
              },
            },
          },
          ghost: {
            blue: {
              color: "blue.500",
              _hover: { 
                bg: "blue.50", 
                _dark: { bg: "blue.900" } 
              },
              _active: { 
                bg: "blue.100", 
                _dark: { bg: "blue.800" } 
              },
            },
            gray: {
              color: { base: "gray.600", _dark: "gray.300" },
              _hover: { 
                bg: "gray.100", 
                _dark: { bg: "gray.700" } 
              },
              _active: { 
                bg: "gray.200", 
                _dark: { bg: "gray.600" } 
              },
            },
          },
        },
        defaultVariants: {
          colorPalette: "blue",
        },
      },
    },
    tokens: {
      colors: {
        // Blue color scheme
        blue: {
          50: { value: "#eff6ff" },
          100: { value: "#dbeafe" },
          200: { value: "#bfdbfe" },
          300: { value: "#93c5fd" },
          400: { value: "#60a5fa" },
          500: { value: "#3b82f6" },
          600: { value: "#2563eb" },
          700: { value: "#1d4ed8" },
          800: { value: "#1e40af" },
          900: { value: "#1e3a8a" },
          950: { value: "#172554" },
        },
        // Purple color scheme
        purple: {
          50: { value: "#faf5ff" },
          100: { value: "#f3e8ff" },
          200: { value: "#e9d5ff" },
          300: { value: "#d8b4fe" },
          400: { value: "#c084fc" },
          500: { value: "#a855f7" },
          600: { value: "#9333ea" },
          700: { value: "#7c3aed" },
          800: { value: "#6b21a8" },
          900: { value: "#581c87" },
          950: { value: "#3b0764" },
        },
        // Green color scheme
        green: {
          50: { value: "#f0fdf4" },
          100: { value: "#dcfce7" },
          200: { value: "#bbf7d0" },
          300: { value: "#86efac" },
          400: { value: "#4ade80" },
          500: { value: "#22c55e" },
          600: { value: "#16a34a" },
          700: { value: "#15803d" },
          800: { value: "#166534" },
          900: { value: "#14532d" },
          950: { value: "#052e16" },
        },
        // Orange color scheme
        orange: {
          50: { value: "#fff7ed" },
          100: { value: "#ffedd5" },
          200: { value: "#fed7aa" },
          300: { value: "#fdba74" },
          400: { value: "#fb923c" },
          500: { value: "#f97316" },
          600: { value: "#ea580c" },
          700: { value: "#c2410c" },
          800: { value: "#9a3412" },
          900: { value: "#7c2d12" },
          950: { value: "#431407" },
        },
        // Pink color scheme
        pink: {
          50: { value: "#fdf2f8" },
          100: { value: "#fce7f3" },
          200: { value: "#fbcfe8" },
          300: { value: "#f9a8d4" },
          400: { value: "#f472b6" },
          500: { value: "#ec4899" },
          600: { value: "#db2777" },
          700: { value: "#be185d" },
          800: { value: "#9d174d" },
          900: { value: "#831843" },
          950: { value: "#500724" },
        },
        // Teal color scheme
        teal: {
          50: { value: "#f0fdfa" },
          100: { value: "#ccfbf1" },
          200: { value: "#99f6e4" },
          300: { value: "#5eead4" },
          400: { value: "#2dd4bf" },
          500: { value: "#14b8a6" },
          600: { value: "#0d9488" },
          700: { value: "#0f766e" },
          800: { value: "#115e59" },
          900: { value: "#134e4a" },
          950: { value: "#042f2e" },
        },
        // Yellow color scheme for stars
        yellow: {
          50: { value: "#fefce8" },
          100: { value: "#fef3c7" },
          200: { value: "#fde68a" },
          300: { value: "#fcd34d" },
          400: { value: "#fbbf24" },
          500: { value: "#f59e0b" },
          600: { value: "#d97706" },
          700: { value: "#b45309" },
          800: { value: "#92400e" },
          900: { value: "#78350f" },
          950: { value: "#451a03" },
        },
        // Gray color scheme
        gray: {
          50: { value: "#f9fafb" },
          100: { value: "#f3f4f6" },
          200: { value: "#e5e7eb" },
          300: { value: "#d1d5db" },
          400: { value: "#9ca3af" },
          500: { value: "#6b7280" },
          600: { value: "#4b5563" },
          700: { value: "#374151" },
          800: { value: "#1f2937" },
          900: { value: "#111827" },
          950: { value: "#030712" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Background colors
        "bg.canvas": {
          value: { base: "white", _dark: "gray.900" },
        },
        "bg.surface": {
          value: { base: "white", _dark: "gray.800" },
        },
        "bg.muted": {
          value: { base: "gray.50", _dark: "gray.900" },
        },
        // Text colors
        "fg.default": {
          value: { base: "gray.900", _dark: "white" },
        },
        "fg.muted": {
          value: { base: "gray.600", _dark: "gray.300" },
        },
        // Border colors
        "border.default": {
          value: { base: "gray.200", _dark: "gray.700" },
        },
      },
    },
  },
})

export const theme = createSystem(defaultConfig, config)