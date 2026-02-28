import { ThemeToggle } from './ThemeToggle';
import { ThemeSelector } from './ThemeSelector';
import { ThemeCustomizer } from './ThemeCustomizer';
import { ThemePreview } from './ThemePreview';
import { ComponentShowcase } from './ComponentShowcase';
import { useTheme } from '../context/useTheme';

export const ThemeDemo = () => {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen py-12 px-4 transition-colors duration-300"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            🎨 Thème Global avec Context
          </h1>
          <p className="text-lg mb-2" style={{ color: 'var(--color-textSecondary)' }}>
            Projet 22/100 • Provider Pattern & Theme Management
          </p>
          <p className="text-sm" style={{ color: 'var(--color-textSecondary)' }}>
            Gestion de thème global avec Context API et CSS Variables
          </p>
        </div>

        {/* Theme toggle */}
        <div className="flex justify-center mb-8">
          <ThemeToggle />
        </div>

        {/* Current theme info */}
        <div className="mb-8 p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--color-surface)' }}>
          <p style={{ color: 'var(--color-textSecondary)' }}>
            Thème actuel : <strong style={{ color: 'var(--color-primary)' }}>{theme.name}</strong>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Theme selector */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
            <ThemeSelector />
          </div>

          {/* Theme customizer */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
            <ThemeCustomizer />
          </div>

          {/* Theme preview */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
            <ThemePreview />
          </div>

          {/* Component showcase */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
            <ComponentShowcase />
          </div>

          {/* Features */}
          <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-xl" style={{ color: 'var(--color-success)' }}>✓</span>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>Provider Pattern</h3>
                  <p className="text-sm" style={{ color: 'var(--color-textSecondary)' }}>
                    Architecture Context API
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl" style={{ color: 'var(--color-success)' }}>✓</span>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>CSS Variables</h3>
                  <p className="text-sm" style={{ color: 'var(--color-textSecondary)' }}>
                    Thème dynamique en temps réel
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl" style={{ color: 'var(--color-success)' }}>✓</span>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>Type Safety</h3>
                  <p className="text-sm" style={{ color: 'var(--color-textSecondary)' }}>
                    100% TypeScript, 0% any
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl" style={{ color: 'var(--color-success)' }}>✓</span>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>System Theme</h3>
                  <p className="text-sm" style={{ color: 'var(--color-textSecondary)' }}>
                    Détection préférences système
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl" style={{ color: 'var(--color-success)' }}>✓</span>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>Persistence</h3>
                  <p className="text-sm" style={{ color: 'var(--color-textSecondary)' }}>
                    localStorage automatique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl" style={{ color: 'var(--color-success)' }}>✓</span>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>Customization</h3>
                  <p className="text-sm" style={{ color: 'var(--color-textSecondary)' }}>
                    Personnalisation complète
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};