import '@league-of-foundry-developers/foundry-vtt-types';

import { ClassFeatures } from './classFeatures';
import type DND5e from '../dnd5e';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface DND5e {
  // ASCII Artwork
  ASCII: string;

  /**
   * The set of Ability Scores used within the system
   * @type {Object}
   */
  abilities: Record<DND5e.AbilityType, string>;
  abilityAbbreviations: Record<DND5e.AbilityType, string>;

  /* -------------------------------------------- */

  /**
   * Character alignment options
   * @type {Object}
   */
  alignments: Record<DND5e.Alignment, string>;

  /* -------------------------------------------- */

  /**
   * An enumeration of item attunement types
   * @enum {number}
   */
  attunementTypes: {
    NONE: 0;
    REQUIRED: 1;
    ATTUNED: 2;
  };

  /**
   * An enumeration of item attunement states
   * @type {{"0": string, "1": string, "2": string}}
   */
  attunements: Record<DND5e['attunementTypes'][keyof DND5e['attunementTypes']], string>;

  /* -------------------------------------------- */
  weaponProficiencies: Record<DND5e.WeaponProficiency, string>;
  toolProficiencies: Record<DND5e.ToolProficiency, string>;

  /* -------------------------------------------- */

  /**
   * This Object defines the various lengths of time which can occur
   * @type {Object}
   */
  timePeriods: Record<DND5e.TimePeriod, String>;

  /* -------------------------------------------- */

  /**
   * This describes the ways that an ability can be activated
   * @type {Object}
   */
  abilityActivationTypes: Record<DND5e.AbilityActivationType, string>;

  /* -------------------------------------------- */

  abilityConsumptionTypes: Record<DND5e.ConsumeType, string>;

  /* -------------------------------------------- */

  // Creature Sizes
  actorSizes: Record<DND5e.Size, string>;
  tokenSizes: Record<DND5e.Size, number>;

  /* -------------------------------------------- */

  /**
   * Classification types for item action types
   * @type {Object}
   */
  itemActionTypes: Record<DND5e.ActionType, string>;

  /* -------------------------------------------- */
  itemCapacityTypes: {
    items: string;
    weight: string;
  };

  /* -------------------------------------------- */

  /**
   * Enumerate the lengths of time over which an item can have limited use ability
   * @type {Object}
   */
  limitedUsePeriods: Record<DND5e.UsePeriod, string>;

  /* -------------------------------------------- */

  /**
   * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
   * @type {Object}
   */
  equipmentTypes: Record<DND5e.ArmorType, string>;

  /* -------------------------------------------- */

  /**
   * The set of Armor Proficiencies which a character may have
   * @type {Object}
   */
  armorProficiencies: Record<DND5e.ArmorProficiencies, string>;

  /* -------------------------------------------- */

  /**
   * Enumerate the valid consumable types which are recognized by the system
   * @type {Object}
   */
  comsumableTypes: Record<DND5e.ConsumableType, string>;

  /* -------------------------------------------- */

  /**
   * The valid currency denominations supported by the 5e system
   * @type {Object}
   */
  currencies: Record<DND5e.Currency, string>;

  /**
   * Define the upwards-conversion rules for registered currency types
   * @type {{string, object}}
   */
  currencyConversion: Record<DND5e.Currency, { into: DND5e.Currency; each: number }>;

  /* -------------------------------------------- */

  // Damage Types
  damageTypes: Record<DND5e.DamageType, string>;

  // Damage Resistance Types
  damageResistanceTypes: Record<DND5e.DamageResistanceType, string>;

  /* -------------------------------------------- */

  /**
   * The valid units of measure for movement distances in the game system.
   * By default this uses the imperial units of feet and miles.
   * @type {Object<string,string>}
   */
  movementTypes: Record<DND5e.MovementType, string>;

  /**
   * The valid units of measure for movement distances in the game system.
   * By default this uses the imperial units of feet and miles.
   * @type {Object<string,string>}
   */
  movementUnits: Record<DND5e.Unit, string>;

  /**
   * The valid units of measure for the range of an action or effect.
   * This object automatically includes the movement units from DND5E.movementUnits
   * @type {Object<string,string>}
   */
  distanceUnits: Record<DND5e.DistanceUnit, string> & DND5e['movementUnits'];

  /* -------------------------------------------- */

  /**
   * Configure aspects of encumbrance calculation so that it could be configured by modules
   * @type {Object}
   */
  encumbrance: {
    currencyPerWeight: number;
    strMultiplier: number;
    vehicleWeightMultiplier: number;
  };

  /* -------------------------------------------- */

  /**
   * This Object defines the types of single or area targets which can be applied
   * @type {Object}
   */
  targetTypes: Record<DND5e.TargetType, string>;

  /* -------------------------------------------- */

  /**
   * Map the subset of target types which produce a template area of effect
   * The keys are DND5E target types and the values are MeasuredTemplate shape types
   * @type {Object}
   */
  areaTargetTypes: Record<DND5e.AreaTarget, string>;

  /* -------------------------------------------- */

  // Healing Types
  healingTypes: {
    healing: string;
    temphp: string;
  };

  /* -------------------------------------------- */

  /**
   * Enumerate the denominations of hit dice which can apply to classes
   * @type {Array.<string>}
   */
  hitDieTypes: `d${string}`[];

  /* -------------------------------------------- */

  /**
   * The set of possible sensory perception types which an Actor may have
   * @type {object}
   */
  senses: Record<DND5e.Senses, string>;

  /* -------------------------------------------- */

  /**
   * The set of skill which can be trained
   * @type {Object}
   */
  skills: Record<DND5e.SkillType, string>;

  /* -------------------------------------------- */

  spellPreparationModes: Record<DND5e.Preparation, string>;
  spellUpcastModes: DND5e.Preparation[];
  spellProgression: Record<DND5e.SpellcasterProgression, string>;

  /* -------------------------------------------- */

  /**
   * The available choices for how spell damage scaling may be computed
   * @type {Object}
   */
  spellScalingModes: Record<DND5e.SpellScaling, string>;

  /* -------------------------------------------- */

  /**
   * Define the set of types which a weapon item can take
   * @type {Object}
   */
  weaponTypes: Record<DND5e.WeaponType, string>;

  /* -------------------------------------------- */

  /**
   * Define the set of weapon property flags which can exist on a weapon
   * @type {Object}
   */
  weaponProperties: Record<DND5e.WeaponProperty, string>;

  // Spell Components
  spellComponents: Record<DND5e.SpellComponent, string>;

  // Spell Schools
  spellSchools: Record<DND5e.SpellSchool, string>;

  // Spell Levels
  spellLevels: Record<DND5e.SpellLevel, string>;

  // Spell Scroll Compendium UUIDs
  spellScrollIds: Record<DND5e.SpellLevel, string>;

  /**
   * Define the standard slot progression by character level.
   * The entries of this array represent the spell slot progression for a full spell-caster.
   * @type {Array[]}
   */
  SPELL_SLOT_TABLE: number[][];

  /* -------------------------------------------- */

  // Polymorph options.
  polymorphSettings: Record<DND5e.PolymorphSetting, string>;

  /* -------------------------------------------- */

  /**
   * Skill, ability, and tool proficiency levels
   * Each level provides a proficiency multiplier
   * @type {Object}
   */
  proficiencyLevels: Record<number, string>;

  /* -------------------------------------------- */

  /**
   * The amount of cover provided by an object.
   * In cases where multiple pieces of cover are
   * in play, we take the highest value.
   */
  cover: Record<number, string>;

  /* -------------------------------------------- */

  // Condition Types
  conditionTypes: Record<DND5e.ConditionType, string>;

  // Languages
  languages: Record<DND5e.Language, string>;

  // Character Level XP Requirements
  CHARACTER_EXP_LEVELS: number[];

  // Challenge Rating XP Levels
  CR_EXP_LEVELS: number[];

  // Character Features Per Class And Level
  classFeatures: ClassFeatures;

  // Configure Optional Character Flags
  characterFlags: Record<
    DND5e.CharacterFlag,
    {
      name: string;
      hint: string;
      section: string;
      type: Boolean;
      placeholder?: boolean;
    }
  > & {
    observantFeat: {
      skills: DND5e.SkillType[];
    };
    reliableAthlete: {
      abilities: DND5e.AbilityType[];
    };
  };

  // Configure allowed status flags
  allowedActorFlags: [...DND5e.CharacterFlagArr, 'isPolymorphed', 'originalActor'];
}