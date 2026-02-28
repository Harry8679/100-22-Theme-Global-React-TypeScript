import { useTheme } from '../context/useTheme';

export const ThemeSelector = () => {
  const { theme, availableThemes, setTheme } = useTheme();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
        Thèmes prédéfinis
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {availableThemes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`p-4 rounded-xl transition-all border-2 ${
              theme.id === t.id ? 'ring-4 scale-105' : 'hover:scale-105'
            }`}
            style={{
              backgroundColor: t.colors.surface,
              borderColor: t.colors.border,
              '--tw-ring-color': t.colors.primary,
            } as React.CSSProperties}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: t.colors.primary }}
              />
              <span className="font-bold" style={{ color: t.colors.text }}>
                {t.name}
              </span>
            </div>

            <div className="flex gap-2">
              <div
                className="flex-1 h-3 rounded"
                style={{ backgroundColor: t.colors.primary }}
              />
              <div
                className="flex-1 h-3 rounded"
                style={{ backgroundColor: t.colors.secondary }}
              />
              <div
                className="flex-1 h-3 rounded"
                style={{ backgroundColor: t.colors.accent }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};