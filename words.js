// Curated list of quality 6-letter words for daily puzzles
// Selected to be: common, recognizable, non-plural, and interesting
// FIXED: Removed all non-6-letter words
const DAILY_WORDS = [
    'ABROAD', 'ACCEPT', 'ACTUAL', 'ADVENT', 'ADVICE', 'AFFIRM', 'AFRAID', 'AGREED',
    'ANCHOR', 'ANIMAL', 'ANNUAL', 'ANSWER', 'ANYONE', 'ANYWAY', 'APPEAL', 'APPEAR',
    'AROUND', 'ARRIVE', 'ARTIST', 'ASPECT', 'ASSURE', 'ATTACH', 'ATTACK', 'ATTEND',
    'AUTHOR', 'AUTUMN', 'AVENUE', 'AWAKEN', 'BACKUP', 'BALLOT', 'BANANA', 'BANNER',
    'BARREL', 'BASKET', 'BATTLE', 'BEACON', 'BEAUTY', 'BECAME', 'BEFORE', 'BEHALF',
    'BEHAVE', 'BEHIND', 'BELIEF', 'BELONG', 'BERLIN', 'BETTER', 'BEYOND', 'BINARY',
    'BISHOP', 'BITTER', 'BORDER', 'BORROW', 'BOTTLE', 'BOTTOM', 'BOUGHT', 'BRANCH',
    'BREACH', 'BREATH', 'BRIDGE', 'BRIGHT', 'BROKEN', 'BRONZE', 'BRUTAL', 'BUCKET',
    'BUDGET', 'BURDEN', 'BUREAU', 'BUTTON', 'CAMERA', 'CAMPUS', 'CANCEL', 'CANCER',
    'CANVAS', 'CARBON', 'CAREER', 'CARPET', 'CASTLE', 'CASUAL', 'CAUGHT', 'CENTER',
    'CEREAL', 'CHANCE', 'CHANGE', 'CHAPEL', 'CHARGE', 'CHOICE', 'CHOOSE', 'CHOSEN',
    'CHROME', 'CHURCH', 'CINEMA', 'CIRCLE', 'CIRCUS', 'CLAIMS', 'CLIENT', 'CLIMAT',
    'CLOSED', 'CLOSER', 'CLOSET', 'CLOTHE', 'CLOUDY', 'COARSE', 'COFFEE', 'COLUMN',
    'COMBAT', 'COMING', 'COMMON', 'COMPEL', 'COMPLY', 'CONCUR', 'CORNER', 'COSMIC',
    'COTTON', 'COUNTY', 'COUPLE', 'COUPON', 'COURSE', 'COUSIN', 'CRAFTY', 'CREATE',
    'CREDIT', 'CRISIS', 'CRITIC', 'CRUISE', 'CUSTOM', 'DAMAGE', 'DANCER', 'DANGER',
    'DEBATE', 'DECADE', 'DECENT', 'DECIDE', 'DEFEAT', 'DEFEND', 'DEFINE', 'DEGREE',
    'DEMAND', 'DENTAL', 'DEPLOY', 'DEPUTY', 'DESERT', 'DESIGN', 'DESIRE', 'DETAIL',
    'DETECT', 'DEVICE', 'DEVOTE', 'DIALOG', 'DIFFER', 'DIGEST', 'DINNER', 'DIRECT',
    'DIVIDE', 'DIVINE', 'DOCKER', 'DOCTOR', 'DOMAIN', 'DONATE', 'DOUBLE', 'DRAWER',
    'DRIVEN', 'DRIVER', 'DURING', 'EAGLES', 'EARNED', 'EASILY', 'EATING', 'EDITOR',
    'EFFECT', 'EFFORT', 'EIGHTH', 'EITHER', 'ELEVEN', 'EMBARK', 'EMERGE', 'EMPIRE',
    'EMPLOY', 'ENABLE', 'ENDING', 'ENDURE', 'ENERGY', 'ENGAGE', 'ENGINE', 'ENOUGH',
    'ENRICH', 'ENSURE', 'ENTIRE', 'ENTITY', 'EQUITY', 'ESCAPE', 'ESTATE', 'ETHNIC',
    'EUROPE', 'EVOLVE', 'EXCEED', 'EXCEPT', 'EXCUSE', 'EXEMPT', 'EXPAND', 'EXPECT',
    'EXPERT', 'EXPORT', 'EXPOSE', 'EXTEND', 'EXTENT', 'FABRIC', 'FACIAL', 'FACTOR',
    'FAILED', 'FAIRLY', 'FALLEN', 'FAMILY', 'FAMOUS', 'FATHER', 'FAULTS', 'FAVOUR',
    'FEMALE', 'FIERCE', 'FIGURE', 'FILING', 'FILTER', 'FINALE', 'FINGER', 'FINISH',
    'FISCAL', 'FLAVOR', 'FLIGHT', 'FLORAL', 'FLOWER', 'FLYING', 'FOLLOW', 'FORBID',
    'FORCED', 'FOREST', 'FORGET', 'FORMAL', 'FORMAT', 'FORMER', 'FOSTER', 'FOUGHT',
    'FOURTH', 'FRANCE', 'FREEZE', 'FRENCH', 'FRIEND', 'FROZEN', 'FUSION', 'FUTURE',
    'GALAXY', 'GARAGE', 'GARDEN', 'GATHER', 'GENDER', 'GENIUS', 'GENTLE', 'GERMAN',
    'GLOBAL', 'GOLDEN', 'GOVERN', 'GRAVEL', 'GREECE', 'GROUND', 'GROWTH', 'GUILTY',
    'GUITAR', 'HACKER', 'HAPPEN', 'HARDLY', 'HATRED', 'HEALTH', 'HEARTS', 'HEATED',
    'HEAVEN', 'HEIGHT', 'HELMET', 'HEREBY', 'HEREIN', 'HEROES', 'HIDDEN', 'HIGHLY',
    'HONEST', 'HONOUR', 'HOPING', 'HORROR', 'HUMANE', 'HUMBLE', 'HUNGER', 'HUNTER',
    'IGNORE', 'IMPACT', 'IMPORT', 'IMPOSE', 'INCOME', 'INDEED', 'INDOOR', 'INDUCE',
    'INFANT', 'INFORM', 'INJURE', 'INJURY', 'INLINE', 'INSECT', 'INSERT', 'INSIDE',
    'INSIST', 'INTEND', 'INTENT', 'INVEST', 'INVITE', 'INVOKE', 'INWARD', 'ISLAND',
    'ITSELF', 'JACKET', 'JOINED', 'JUNGLE', 'JUNIOR', 'KERNEL', 'KNIGHT', 'LABOUR',
    'LADDER', 'LANDED', 'LAPTOP', 'LATELY', 'LATEST', 'LATTER', 'LAUNCH', 'LAWYER',
    'LEADER', 'LEAGUE', 'LEARNT', 'LEGACY', 'LEGEND', 'LENGTH', 'LESSON', 'LETTER',
    'LIABLE', 'LIKELY', 'LINEAR', 'LIQUID', 'LISTEN', 'LITTLE', 'LIVING', 'LOCATE',
    'LOCKED', 'LONDON', 'LONELY', 'LONGER', 'LOSING', 'LOVELY', 'LUXURY', 'MAINLY',
    'MAKING', 'MANAGE', 'MANNER', 'MANUAL', 'MARBLE', 'MARGIN', 'MARINE', 'MARKED',
    'MARKET', 'MASTER', 'MATTER', 'MATURE', 'MEADOW', 'MEDIUM', 'MEMBER', 'MEMORY',
    'MENTAL', 'MENTOR', 'MERELY', 'MERGER', 'METHOD', 'METRIC', 'MIDDLE', 'MINING',
    'MINUTE', 'MIRROR', 'MISERY', 'MOBILE', 'MODERN', 'MODEST', 'MODIFY', 'MODULE',
    'MOMENT', 'MONDAY', 'MONKEY', 'MORTAL', 'MOSTLY', 'MOTHER', 'MOTION', 'MOTIVE',
    'MOVING', 'MURDER', 'MUSEUM', 'MUTUAL', 'MYSTIC', 'NAMELY', 'NARROW', 'NATION',
    'NATIVE', 'NATURE', 'NEARBY', 'NEARLY', 'NEEDED', 'NEEDLE', 'NEURAL', 'NICELY',
    'NOBODY', 'NORMAL', 'NOTICE', 'NOTION', 'NOUGHT', 'NUMBER', 'OBJECT', 'OBTAIN',
    'OCCUPY', 'OCEANS', 'OFFEND', 'OFFICE', 'OFFSET', 'ONLINE', 'ONWARD', 'OPENED',
    'OPENER', 'OPENLY', 'OPPOSE', 'OPTION', 'ORACLE', 'ORANGE', 'ORIGIN', 'OUTPUT',
    'OUTSET', 'OXFORD', 'OXYGEN', 'PACKED', 'PACKET', 'PALACE', 'PANELS', 'PARADE',
    'PARDON', 'PARENT', 'PARTLY', 'PASSED', 'PATENT', 'PATROL', 'PATRON', 'PENCIL',
    'PEOPLE', 'PEPPER', 'PERIOD', 'PERMIT', 'PERSON', 'PHRASE', 'PICKED', 'PICNIC',
    'PIRATE', 'PLACED', 'PLANET', 'PLAYER', 'PLEASE', 'PLEDGE', 'PLENTY', 'POCKET',
    'POETRY', 'POLICE', 'POLICY', 'POLISH', 'PORTAL', 'POSTER', 'POTATO', 'POTENT',
    'POWDER', 'PRAISE', 'PRAYER', 'PREFER', 'PRETTY', 'PRIEST', 'PRINCE', 'PRISON',
    'PROFIT', 'PROMPT', 'PROPER', 'PROVEN', 'PUBLIC', 'PURELY', 'PURPLE', 'PURSUE',
    'PUZZLE', 'PYTHON', 'RABBIT', 'RACIAL', 'RADIUS', 'RAISED', 'RANDOM', 'RANGER',
    'RANKED', 'RARELY', 'RATHER', 'RATING', 'READER', 'REALLY', 'REASON', 'RECALL',
    'RECENT', 'RECORD', 'REDUCE', 'REFORM', 'REFUGE', 'REFUND', 'REFUSE', 'REGARD',
    'REGIME', 'REGION', 'REGRET', 'REJECT', 'RELATE', 'RELIEF', 'REMAIN', 'REMARK',
    'REMEDY', 'REMIND', 'REMOTE', 'REMOVE', 'RENDER', 'RENTAL', 'REPAIR', 'REPEAT',
    'REPLAY', 'REPORT', 'RESCUE', 'RESIDE', 'RESIGN', 'RESIST', 'RESORT', 'RESULT',
    'RESUME', 'RETAIL', 'RETAIN', 'RETIRE', 'RETURN', 'REVEAL', 'REVIEW', 'REVISE',
    'REWARD', 'RIBBON', 'RICHES', 'RIDDLE', 'RISING', 'RITUAL', 'ROBUST', 'ROCKET',
    'ROTATE', 'ROTTEN', 'ROWING', 'RUBBER', 'RULING', 'RUMOUR', 'RUSHED', 'SACRED',
    'SAFETY', 'SAILOR', 'SALARY', 'SALMON', 'SAMPLE', 'SAVING', 'SAYING', 'SCENIC',
    'SCHEME', 'SCHOOL', 'SCREEN', 'SCRIPT', 'SEARCH', 'SEASON', 'SECOND', 'SECRET',
    'SECTOR', 'SECURE', 'SEEING', 'SELECT', 'SELLER', 'SENIOR', 'SENSOR', 'SERIAL',
    'SERIES', 'SERVED', 'SERVER', 'SETTLE', 'SEVERE', 'SHADOW', 'SHAPED', 'SHARED',
    'SHIELD', 'SHOULD', 'SHOWER', 'SHRINE', 'SIGNAL', 'SIGNED', 'SILENT', 'SILVER',
    'SIMPLE', 'SIMPLY', 'SINGLE', 'SISTER', 'SKETCH', 'SLOGAN', 'SMOOTH', 'SOCIAL',
    'SOCKET', 'SOLELY', 'SOLEMN', 'SOLVED', 'SOURCE', 'SOVIET', 'SPEECH', 'SPHERE',
    'SPIRIT', 'SPOKEN', 'SPREAD', 'SPRING', 'SQUARE', 'STABLE', 'STATED', 'STATIC',
    'STATUE', 'STATUS', 'STEADY', 'STOLEN', 'STORES', 'STRAIN', 'STRAND', 'STREAM',
    'STREET', 'STRESS', 'STRICT', 'STRIKE', 'STRING', 'STROKE', 'STRONG', 'STRUCT',
    'STUDIO', 'SUBMIT', 'SUBURB', 'SUBTLE', 'SUDDEN', 'SUFFER', 'SUMMER', 'SUMMIT',
    'SUNDAY', 'SUPPLY', 'SURELY', 'SURVEY', 'SWITCH', 'SYMBOL', 'SYNTAX', 'SYSTEM',
    'TABLET', 'TACKLE', 'TACTIC', 'TAKING', 'TALENT', 'TARGET', 'TAUGHT', 'TEMPLE',
    'TENANT', 'TENDER', 'TERROR', 'THANKS', 'THEORY', 'THESIS', 'THIRTY', 'THOUGH',
    'THREAD', 'THREAT', 'THRILL', 'THRONE', 'THROWN', 'THRUST', 'TICKET', 'TIMBER',
    'TIMING', 'TISSUE', 'TOWARD', 'TRADER', 'TRAGIC', 'TRAVEL', 'TREATY', 'TRENDY',
    'TRIBAL', 'TRIPLE', 'TROPHY', 'TRUSTY', 'TRYING', 'TUNNEL', 'TURKEY', 'TURNED',
    'TWELVE', 'TWENTY', 'UNABLE', 'UNFAIR', 'UNFOLD', 'UNIQUE', 'UNITED', 'UNLIKE',
    'UNLOCK', 'UNSEEN', 'UNUSED', 'UNVEIL', 'UNWRAP', 'UPBEAT', 'UPDATE', 'UPLOAD',
    'UPWARD', 'URGENT', 'USEFUL', 'VACANT', 'VALLEY', 'VARIED', 'VASTLY', 'VECTOR',
    'VENDOR', 'VERBAL', 'VERIFY', 'VESSEL', 'VICTIM', 'VIENNA', 'VIEWER', 'VIKING',
    'VIOLIN', 'VIRTUE', 'VISION', 'VISUAL', 'VOLUME', 'VOTING', 'VOYAGE', 'WALKED',
    'WALLET', 'WANDER', 'WANTED', 'WARMLY', 'WEALTH', 'WEAPON', 'WEEKLY', 'WEIGHT',
    'WHOLLY', 'WICKED', 'WIDELY', 'WIDGET', 'WINDOW', 'WINNER', 'WINTER', 'WISDOM',
    'WIZARD', 'WONDER', 'WOODEN', 'WORKER', 'WORTHY', 'WRITER', 'YELLOW', 'YOGURT',
    'ZOMBIE', 'ZONING'
];

// Simple seeded random number generator
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Get deterministic word index based on date
function getDailyWordIndex() {
    const now = new Date();
    const start = new Date(2024, 0, 1); // Jan 1, 2024 as epoch
    const daysSinceStart = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const seed = daysSinceStart + 12345; // Add constant to make it less predictable
    return Math.floor(seededRandom(seed) * DAILY_WORDS.length);
}

// Get today's word
function getTodaysWord() {
    const index = getDailyWordIndex();
    return DAILY_WORDS[index];
}

// Get date string for tracking (YYYY-MM-DD)
function getDateString() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

// Calculate time until next word (midnight)
function getTimeUntilNextWord() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow - now;
}

// Format milliseconds to HH:MM:SS
function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
