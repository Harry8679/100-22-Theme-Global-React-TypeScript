import { useTheme } from '../context/useTheme';

export const ThemePreview = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
        Aperçu du thème
      </h3>

      {/* Color palette */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(theme.colors).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <div
              className="h-24 rounded-lg shadow-md"
              style={{ backgroundColor: value }}
            />
            <div>
              <div className="text-sm font-semibold capitalize" style={{ color: 'var(--color-text)' }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-xs font-mono" style={{ color: 'var(--color-textSecondary)' }}>
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Typography */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
        <h4 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          Typographie
        </h4>
        <div className="space-y-2">
          <p className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
            Titre principal
          </p>
          <p className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
            Sous-titre
          </p>
          <p className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
            Texte important
          </p>
          <p style={{ color: 'var(--color-text)' }}>
            Texte normal avec un contenu standard pour voir le rendu.
          </p>
          <p className="text-sm" style={{ color: 'var(--color-textSecondary)' }}>
            Texte secondaire pour les informations moins importantes.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          Boutons
        </h4>
        <div className="flex flex-wrap gap-4">
          <button
            className="px-6 py-3 rounded-lg font-semibold"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
          >
            Primaire
          </button>
          <button
            className="px-6 py-3 rounded-lg font-semibold"
            style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
          >
            Secondaire
          </button>
          <button
            className="px-6 py-3 rounded-lg font-semibold"
            style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
          >
            Accent
          </button>
          <button
            className="px-6 py-3 rounded-lg font-semibold border-2"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-background)',
              color: 'var(--color-text)',
            }}
          >
            Outlined
          </button>
        </div>
      </div>

      {/* Status colors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-error)' }}>
          <div className="text-white font-bold">❌ Erreur</div>
          <div className="text-white text-sm opacity-90">Message d'erreur</div>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-success)' }}>
          <div className="text-white font-bold">✅ Succès</div>
          <div className="text-white text-sm opacity-90">Opération réussie</div>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-warning)' }}>
          <div className="text-white font-bold">⚠️ Attention</div>
          <div className="text-white text-sm opacity-90">Avertissement</div>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-info)' }}>
          <div className="text-white font-bold">ℹ️ Info</div>
          <div className="text-white text-sm opacity-90">Information</div>
        </div>
      </div>
    </div>
  );
};