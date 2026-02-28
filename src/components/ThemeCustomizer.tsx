import { useState } from 'react';
import { useTheme } from '../context/useTheme';
import type { ThemeColors } from '../types/theme';

export const ThemeCustomizer = () => {
  const { theme, customizeTheme, resetTheme } = useTheme();
  const [activeColor, setActiveColor] = useState<keyof ThemeColors>('primary');

  const colorOptions: Array<{ key: keyof ThemeColors; label: string }> = [
    { key: 'primary', label: 'Primaire' },
    { key: 'secondary', label: 'Secondaire' },
    { key: 'accent', label: 'Accent' },
    { key: 'background', label: 'Fond' },
    { key: 'surface', label: 'Surface' },
    { key: 'text', label: 'Texte' },
    { key: 'textSecondary', label: 'Texte secondaire' },
    { key: 'border', label: 'Bordure' },
  ];

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    customizeTheme({ [key]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
          Personnaliser le thème
        </h3>
        <button
          onClick={resetTheme}
          className="px-4 py-2 rounded-lg font-semibold transition-colors"
          style={{
            backgroundColor: 'var(--color-error)',
            color: 'white',
          }}
        >
          ⟳ Réinitialiser
        </button>
      </div>

      {/* Color selector tabs */}
      <div className="flex flex-wrap gap-2">
        {colorOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => setActiveColor(option.key)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeColor === option.key ? 'scale-105 shadow-lg' : ''
            }`}
            style={{
              backgroundColor:
                activeColor === option.key
                  ? 'var(--color-primary)'
                  : 'var(--color-surface)',
              color:
                activeColor === option.key
                  ? 'white'
                  : 'var(--color-text)',
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Color picker */}
      <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="flex items-center gap-4">
          <div
            className="w-20 h-20 rounded-xl shadow-lg"
            style={{ backgroundColor: theme.colors[activeColor] }}
          />
          <div className="flex-1">
            <label className="block font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
              {colorOptions.find((o) => o.key === activeColor)?.label}
            </label>
            <input
              type="color"
              value={theme.colors[activeColor]}
              onChange={(e) => handleColorChange(activeColor, e.target.value)}
              className="w-full h-12 rounded-lg cursor-pointer"
            />
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold" style={{ color: 'var(--color-textSecondary)' }}>
              Code couleur
            </div>
            <div className="font-mono font-bold text-lg" style={{ color: 'var(--color-text)' }}>
              {theme.colors[activeColor]}
            </div>
          </div>
        </div>
      </div>

      {/* Preset colors */}
      <div>
        <h4 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
          Couleurs prédéfinies
        </h4>
        <div className="grid grid-cols-8 gap-2">
          {[
            '#ef4444', '#f97316', '#f59e0b', '#eab308',
            '#84cc16', '#22c55e', '#10b981', '#14b8a6',
            '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
            '#8b5cf6', '#a855f7', '#d946ef', '#ec4899',
          ].map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(activeColor, color)}
              className="w-full aspect-square rounded-lg transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};