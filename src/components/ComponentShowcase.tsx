import { useState } from 'react';

export const ComponentShowcase = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
        Composants UI
      </h3>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
          <h4 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text)' }}>
            Carte simple
          </h4>
          <p style={{ color: 'var(--color-textSecondary)' }}>
            Une carte avec du contenu. Le thème s'applique automatiquement à tous les composants.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-lg border-2" style={{
          backgroundColor: 'var(--color-background)',
          borderColor: 'var(--color-border)',
        }}>
          <h4 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
            Carte avec bordure
          </h4>
          <p style={{ color: 'var(--color-textSecondary)' }}>
            Une variante avec bordure colorée pour mettre en évidence.
          </p>
        </div>
      </div>

      {/* Form elements */}
      <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          Formulaires
        </h4>

        {/* Input */}
        <div>
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
            Champ texte
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Entrez du texte..."
            className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors"
            style={{
              backgroundColor: 'var(--color-background)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-primary)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--color-border)';
            }}
          />
        </div>

        {/* Select */}
        <div>
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
            Sélection
          </label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 outline-none"
            style={{
              backgroundColor: 'var(--color-background)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* Checkbox */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-5 h-5"
            />
            <span className="font-semibold" style={{ color: 'var(--color-text)' }}>
              Case à cocher
            </span>
          </label>
        </div>

        {/* Textarea */}
        <div>
          <label className="block font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
            Zone de texte
          </label>
          <textarea
            rows={4}
            placeholder="Entrez un message..."
            className="w-full px-4 py-3 rounded-lg border-2 outline-none resize-none"
            style={{
              backgroundColor: 'var(--color-background)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          />
        </div>
      </div>

      {/* Alerts */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border-l-4" style={{
          backgroundColor: 'var(--color-surface)',
          borderLeftColor: 'var(--color-success)',
        }}>
          <div className="flex items-center gap-2">
            <span>✅</span>
            <span className="font-bold" style={{ color: 'var(--color-text)' }}>Succès</span>
          </div>
          <p className="text-sm mt-1" style={{ color: 'var(--color-textSecondary)' }}>
            L'opération a été effectuée avec succès.
          </p>
        </div>

        <div className="p-4 rounded-lg border-l-4" style={{
          backgroundColor: 'var(--color-surface)',
          borderLeftColor: 'var(--color-error)',
        }}>
          <div className="flex items-center gap-2">
            <span>❌</span>
            <span className="font-bold" style={{ color: 'var(--color-text)' }}>Erreur</span>
          </div>
          <p className="text-sm mt-1" style={{ color: 'var(--color-textSecondary)' }}>
            Une erreur est survenue lors de l'opération.
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
          <span>Progression</span>
          <span>75%</span>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
          <div
            className="h-full rounded-full transition-all"
            style={{
              backgroundColor: 'var(--color-primary)',
              width: '75%',
            }}
          />
        </div>
      </div>
    </div>
  );
};