export const languages = {
  JavaScript: {
    name: 'JavaScript',
    projectTypes: ['Web', 'Mobile', 'Desktop'],
    description:
      'A versatile scripting language primarily used for web development and building interactive websites, as well as mobile and desktop applications with frameworks like React Native and Electron.',
    Web: [
      'React',
      'Vue',
      'NextJS',
      'Angular',
      'Express',
      'Svelte',
      'None',
      'Other',
    ],
    Mobile: ['React Native', 'Ionic', 'Flutter', 'Cordova', 'None', 'Other'],
    Desktop: ['Electron', 'NW.js', 'React Native for Windows', 'None', 'Other'],
    databases: [
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Firebase',
      'None',
      'Other',
    ],
    cloud: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Heroku',
      'Netlify',
      'None',
      'Other',
    ],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  Python: {
    name: 'Python',
    projectTypes: ['Web', 'Desktop', 'Mobile', 'Embedded'],
    description:
      'A high-level language known for its readability and ease of use. Commonly used for web development, data analysis, machine learning, desktop applications, and embedded systems.',
    Web: ['Django', 'Flask', 'FastAPI', 'Tornado', 'None', 'Other'],
    Desktop: ['Tkinter', 'PyQt', 'Kivy', 'None', 'Other'],
    Mobile: ['Kivy', 'BeeWare', 'None', 'Other'],
    Embedded: ['MicroPython', 'CircuitPython', 'None', 'Other'],
    databases: [
      'SQLite',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'None',
      'Other',
    ],
    cloud: [
      'AWS',
      'Google Cloud',
      'Microsoft Azure',
      'Heroku',
      'DigitalOcean',
      'None',
      'Other',
    ],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  Java: {
    name: 'Java',
    projectTypes: ['Web', 'Mobile', 'Desktop', 'Embedded'],
    description:
      'A widely-used object-oriented language known for its portability and performance. It powers Android apps, web applications, and is also used in desktop and embedded systems.',
    Web: ['Spring', 'JSF', 'Struts', 'None', 'Other'],
    Mobile: ['Android SDK', 'React Native', 'None', 'Other'],
    Desktop: ['JavaFX', 'Swing', 'None', 'Other'],
    Embedded: ['Java ME', 'Embedded Java', 'None', 'Other'],
    databases: [
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Oracle DB',
      'MongoDB',
      'None',
      'Other',
    ],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'IBM Cloud', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  CSharp: {
    name: 'C#',
    projectTypes: ['Web', 'Desktop', 'Mobile'],
    description:
      'A language developed by Microsoft, commonly used for web development (with ASP.NET), building desktop applications, and creating cross-platform mobile apps with Xamarin.',
    Web: ['ASP.NET', 'Blazor', 'None', 'Other'],
    Desktop: ['WPF', 'WinForms', 'None', 'Other'],
    Mobile: ['Xamarin', 'None', 'Other'],
    databases: [
      'SQL Server',
      'SQLite',
      'MongoDB',
      'PostgreSQL',
      'None',
      'Other',
    ],
    cloud: ['Azure', 'AWS', 'Google Cloud', 'Heroku', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  Ruby: {
    name: 'Ruby',
    projectTypes: ['Web'],
    description:
      'A dynamic, object-oriented language, mainly used for web development, especially with the Ruby on Rails framework.',
    Web: ['Ruby on Rails', 'Sinatra', 'None', 'Other'],
    databases: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'None', 'Other'],
    cloud: ['AWS', 'Google Cloud', 'Heroku', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  Swift: {
    name: 'Swift',
    projectTypes: ['Mobile', 'Desktop'],
    description:
      'A powerful and intuitive language developed by Apple, primarily used for building iOS, macOS, watchOS, and tvOS applications.',
    Mobile: ['SwiftUI', 'UIKit', 'None', 'Other'],
    Desktop: ['Cocoa', 'SwiftUI', 'None', 'Other'],
    databases: ['Core Data', 'SQLite', 'Firebase', 'None', 'Other'],
    cloud: ['iCloud', 'AWS', 'Google Cloud', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  Kotlin: {
    name: 'Kotlin',
    projectTypes: ['Mobile', 'Web'],
    description:
      'A modern programming language that runs on the JVM, used for Android app development and web applications, often as an alternative to Java.',
    Mobile: ['Android SDK', 'Ktor', 'None', 'Other'],
    Web: ['Kotlin/JS', 'Ktor', 'None', 'Other'],
    databases: [
      'SQLite',
      'Room Database',
      'Firebase',
      'PostgreSQL',
      'None',
      'Other',
    ],
    cloud: ['Firebase', 'AWS', 'Google Cloud', 'Heroku', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  C: {
    name: 'C',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      'One of the oldest and most influential programming languages, used for system programming, embedded systems, and low-level applications.',
    Embedded: ['FreeRTOS', 'Contiki', 'None', 'Other'],
    Desktop: ['GTK', 'Qt', 'None', 'Other'],
    databases: ['SQLite', 'MySQL', 'None', 'Other'],
    cloud: ['AWS', 'Google Cloud', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  CPlusPlus: {
    name: 'C++',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      'An extension of the C programming language that supports object-oriented programming. Used for system software, game development, embedded systems, and performance-critical applications.',
    Embedded: ['Arduino', 'Qt for Embedded', 'None', 'Other'],
    Desktop: ['Qt', 'GTK', 'MFC', 'None', 'Other'],
    databases: ['SQLite', 'PostgreSQL', 'MySQL', 'None', 'Other'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  PHP: {
    name: 'PHP',
    projectTypes: ['Web'],
    description:
      'A server-side scripting language widely used for web development, particularly for creating dynamic and interactive websites and web applications.',
    Web: ['Laravel', 'Symfony', 'CodeIgniter', 'WordPress', 'None', 'Other'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'None', 'Other'],
    cloud: ['AWS', 'Google Cloud', 'Heroku', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  Go: {
    name: 'Go',
    projectTypes: ['Web', 'Desktop'],
    description:
      'A statically typed language designed by Google, known for its simplicity and performance. It is often used for web development and backend services.',
    Web: ['Gin', 'Echo', 'Revel', 'None', 'Other'],
    Desktop: ['GTK', 'Qt', 'None', 'Other'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'None', 'Other'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'Heroku', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  Rust: {
    name: 'Rust',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      'A systems programming language designed for speed and safety, particularly for developing embedded systems, operating systems, and performance-critical applications.',
    Embedded: ['RTIC', 'Tock', 'None', 'Other'],
    Desktop: ['Gtk-rs', 'Druid', 'None', 'Other'],
    databases: ['SQLite', 'PostgreSQL', 'Redis', 'None', 'Other'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  TypeScript: {
    name: 'TypeScript',
    projectTypes: ['Web', 'Mobile'],
    description:
      'A superset of JavaScript that adds static typing. It’s widely used in large-scale web applications and also for building mobile apps using frameworks like Ionic and React Native.',
    Web: ['Angular', 'React', 'Vue', 'NextJS', 'NestJS', 'None', 'Other'],
    Mobile: ['Ionic', 'React Native', 'None', 'Other'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'None', 'Other'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'Firebase', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
  Dart: {
    name: 'Dart',
    projectTypes: ['Mobile', 'Web'],
    description:
      'A language optimized for building cross-platform mobile applications using Flutter, as well as web applications.',
    Mobile: ['Flutter', 'None', 'Other'],
    Web: ['AngularDart', 'Flutter Web', 'None', 'Other'],
    databases: ['Firebase', 'SQLite', 'MongoDB', 'None', 'Other'],
    cloud: ['Firebase', 'AWS', 'Google Cloud', 'None', 'Other'],
    experience: [
      'Entry Level (0-1 year)',
      'Junior Developer (0-2 years)',
      'Mid Developer (2-5 years)',
      'Senior Developer (5-10 years)',
      'Lead/Principal Developer (10+ years)',
    ],
  },
};

export const jpLanguages = {
  JavaScript: {
    name: 'JavaScript',
    projectTypes: ['Web', 'Mobile', 'Desktop'],
    description:
      '主にウェブ開発やインタラクティブなウェブサイトの構築、React NativeやElectronなどのフレームワークを使用したモバイルおよびデスクトップアプリケーションの開発に使用される汎用的なスクリプト言語です。',
    Web: [
      'React',
      'Vue',
      'NextJS',
      'Angular',
      'Express',
      'Svelte',
      'なし',
      'その他',
    ],
    Mobile: ['React Native', 'Ionic', 'Flutter', 'Cordova', 'なし', 'その他'],
    Desktop: [
      'Electron',
      'NW.js',
      'React Native for Windows',
      'なし',
      'その他',
    ],
    databases: [
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Firebase',
      'なし',
      'その他',
    ],
    cloud: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Heroku',
      'Netlify',
      'なし',
      'その他',
    ],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  Python: {
    name: 'Python',
    projectTypes: ['Web', 'Desktop', 'Mobile', 'Embedded'],
    description:
      '可読性と使いやすさで知られる高水準言語で、ウェブ開発、データ分析、機械学習、デスクトップアプリケーション、埋め込みシステムなどに広く使用されています。',
    Web: ['Django', 'Flask', 'FastAPI', 'Tornado', 'なし', 'その他'],
    Desktop: ['Tkinter', 'PyQt', 'Kivy', 'なし', 'その他'],
    Mobile: ['Kivy', 'BeeWare', 'なし', 'その他'],
    Embedded: ['MicroPython', 'CircuitPython', 'なし', 'その他'],
    databases: [
      'SQLite',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'なし',
      'その他',
    ],
    cloud: [
      'AWS',
      'Google Cloud',
      'Microsoft Azure',
      'Heroku',
      'DigitalOcean',
      'なし',
      'その他',
    ],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  Java: {
    name: 'Java',
    projectTypes: ['Web', 'Mobile', 'Desktop', 'Embedded'],
    description:
      'ポータビリティとパフォーマンスで知られる広く使用されているオブジェクト指向言語で、Androidアプリ、ウェブアプリケーション、デスクトップアプリケーション、および埋め込みシステムにも使用されます。',
    Web: ['Spring', 'JSF', 'Struts', 'なし', 'その他'],
    Mobile: ['Android SDK', 'React Native', 'なし', 'その他'],
    Desktop: ['JavaFX', 'Swing', 'なし', 'その他'],
    Embedded: ['Java ME', 'Embedded Java', 'なし', 'その他'],
    databases: [
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Oracle DB',
      'MongoDB',
      'なし',
      'その他',
    ],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'IBM Cloud', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  CSharp: {
    name: 'C#',
    projectTypes: ['Web', 'Desktop', 'Mobile'],
    description:
      'Microsoftによって開発された言語で、ウェブ開発（ASP.NETを使用）、デスクトップアプリケーションの構築、Xamarinを使用したクロスプラットフォームモバイルアプリの作成に広く使用されています。',
    Web: ['ASP.NET', 'Blazor', 'なし', 'その他'],
    Desktop: ['WPF', 'WinForms', 'なし', 'その他'],
    Mobile: ['Xamarin', 'なし', 'その他'],
    databases: [
      'SQL Server',
      'SQLite',
      'MongoDB',
      'PostgreSQL',
      'なし',
      'その他',
    ],
    cloud: ['Azure', 'AWS', 'Google Cloud', 'Heroku', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  Ruby: {
    name: 'Ruby',
    projectTypes: ['Web'],
    description:
      '動的でオブジェクト指向の言語で、特にRuby on Railsフレームワークを使用したウェブ開発に使用されます。',
    Web: ['Ruby on Rails', 'Sinatra', 'なし', 'その他'],
    databases: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'なし', 'その他'],
    cloud: ['AWS', 'Google Cloud', 'Heroku', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  Swift: {
    name: 'Swift',
    projectTypes: ['Mobile', 'Desktop'],
    description:
      'Appleが開発した強力で直感的な言語で、主にiOS、macOS、watchOS、tvOSアプリケーションの開発に使用されます。',
    Mobile: ['SwiftUI', 'UIKit', 'なし', 'その他'],
    Desktop: ['Cocoa', 'SwiftUI', 'なし', 'その他'],
    databases: ['Core Data', 'SQLite', 'Firebase', 'なし', 'その他'],
    cloud: ['iCloud', 'AWS', 'Google Cloud', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  Kotlin: {
    name: 'Kotlin',
    projectTypes: ['Mobile', 'Web'],
    description:
      'JVM上で動作するモダンなプログラミング言語で、Androidアプリ開発やウェブアプリケーションに使用され、Javaの代替としても利用されます。',
    Mobile: ['Android SDK', 'Ktor', 'なし', 'その他'],
    Web: ['Kotlin/JS', 'Ktor', 'なし', 'その他'],
    databases: [
      'SQLite',
      'Room Database',
      'Firebase',
      'PostgreSQL',
      'なし',
      'その他',
    ],
    cloud: ['Firebase', 'AWS', 'Google Cloud', 'Heroku', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  C: {
    name: 'C',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      '最も古く影響力のあるプログラミング言語の一つで、システムプログラミング、埋め込みシステム、低レベルアプリケーションに使用されます。',
    Embedded: ['FreeRTOS', 'Contiki', 'なし', 'その他'],
    Desktop: ['GTK', 'Qt', 'なし', 'その他'],
    databases: ['SQLite', 'MySQL', 'なし', 'その他'],
    cloud: ['AWS', 'Google Cloud', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  CPlusPlus: {
    name: 'C++',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      'Cプログラミング言語の拡張で、オブジェクト指向プログラミングをサポートしています。システムソフトウェア、ゲーム開発、埋め込みシステム、パフォーマンス重視のアプリケーションに使用されます。',
    Embedded: ['Arduino', 'Qt for Embedded', 'なし', 'その他'],
    Desktop: ['Qt', 'GTK', 'MFC', 'なし', 'その他'],
    databases: ['SQLite', 'PostgreSQL', 'MySQL', 'なし', 'その他'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  PHP: {
    name: 'PHP',
    projectTypes: ['Web'],
    description:
      'サーバーサイドスクリプト言語で、特に動的でインタラクティブなウェブサイトやウェブアプリケーションの作成に広く使用されています。',
    Web: ['Laravel', 'Symfony', 'CodeIgniter', 'WordPress', 'なし', 'その他'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'なし', 'その他'],
    cloud: ['AWS', 'Google Cloud', 'Heroku', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  Go: {
    name: 'Go',
    projectTypes: ['Web', 'Desktop'],
    description:
      'Googleによって設計された静的型付け言語で、シンプルさとパフォーマンスで知られています。主にウェブ開発やバックエンドサービスに使用されます。',
    Web: ['Gin', 'Echo', 'Revel', 'なし', 'その他'],
    Desktop: ['GTK', 'Qt', 'なし', 'その他'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'なし', 'その他'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'Heroku', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  Rust: {
    name: 'Rust',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      '高速と安全性を重視して設計されたシステムプログラミング言語で、埋め込みシステム、オペレーティングシステム、パフォーマンス重視のアプリケーションの開発に特に適しています。',
    Embedded: ['RTIC', 'Tock', 'なし', 'その他'],
    Desktop: ['Gtk-rs', 'Druid', 'なし', 'その他'],
    databases: ['SQLite', 'PostgreSQL', 'Redis', 'なし', 'その他'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  TypeScript: {
    name: 'TypeScript',
    projectTypes: ['Web', 'Mobile'],
    description:
      '静的型付けを追加したJavaScriptのスーパーセットで、大規模なウェブアプリケーションの開発や、IonicやReact Nativeなどのフレームワークを使用したモバイルアプリの開発に広く使用されます。',
    Web: ['Angular', 'React', 'Vue', 'NextJS', 'NestJS', 'なし', 'その他'],
    Mobile: ['Ionic', 'React Native', 'なし', 'その他'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'なし', 'その他'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'Firebase', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
  Dart: {
    name: 'Dart',
    projectTypes: ['Mobile', 'Web'],
    description:
      'Flutterを使用したクロスプラットフォームモバイルアプリケーションの構築と、ウェブアプリケーションの開発に最適化された言語です。',
    Mobile: ['Flutter', 'なし', 'その他'],
    Web: ['AngularDart', 'Flutter Web', 'なし', 'その他'],
    databases: ['Firebase', 'SQLite', 'MongoDB', 'なし', 'その他'],
    cloud: ['Firebase', 'AWS', 'Google Cloud', 'なし', 'その他'],
    experience: [
      'エントリーレベル (0～1年)',
      'ジュニア・デベロッパー (0～2年)',
      'ミッドデベロッパー (2～5年)',
      'シニア・デベロッパー (5～10年)',
      'リード／プリンシパル・デベロッパー (10年以上)',
    ],
  },
};

export const developmentTypes = [
  {
    type: 'New Project Development',
    definition:
      'This is the creation of an entirely new software product or system from scratch. It typically involves defining requirements, designing the architecture, writing the code, and testing the solution.',
  },
  {
    type: 'Feature Development',
    definition:
      "This involves adding new features to an existing software product. It's focused on improving the functionality of the application based on user feedback or new requirements.",
  },
  {
    type: 'Upgrade/Version Upgrade',
    definition:
      'This type of development involves updating an existing application to a newer version of the software. It could include new features, improvements in performance, bug fixes, or upgrading underlying libraries and frameworks to ensure compatibility with newer technologies.',
  },
  {
    type: 'Bug Fixes/Issue Resolution',
    definition:
      'Sometimes referred to as maintenance development, this focuses on fixing bugs or issues in an existing system. The development team addresses problems that users or testers identify.',
  },
  {
    type: 'Refactoring',
    definition:
      'Refactoring refers to improving the internal structure of the code without changing its external behavior. The goal is to make the code more maintainable, efficient, or scalable, often in preparation for future features or upgrades.',
  },
  {
    type: 'Migration',
    definition:
      'Migration involves moving software from one environment to another. This can include moving to a different server, platform, or cloud provider, or migrating from an older system (e.g., a legacy system) to a more modern one. Data Migration is also a key part of this process, especially when transferring data between systems with different architectures.',
  },
  {
    type: 'Integration Development',
    definition:
      'This involves connecting different systems, tools, or services to work together. It could involve APIs, third-party service integrations, or integrating different software components within a larger ecosystem.',
  },
  {
    type: 'Customization',
    definition:
      'Custom development is focused on modifying or enhancing a software application to suit the specific needs of a particular user or organization. It is more focused on tailoring an existing solution to meet custom requirements.',
  },
  {
    type: 'Prototyping',
    definition:
      'Prototyping is the development of an early version of a software system (prototype) to explore its feasibility or validate user needs before the full-scale development. It is often used in the initial stages of product design.',
  },
  {
    type: 'Testing/Quality Assurance (QA)',
    definition:
      'Testing is a critical part of development, ensuring the software works as intended. Development in this context can involve writing test scripts, automating tests, and continuously testing different modules of the software throughout the development process.',
  },
  {
    type: 'Continuous Integration/Continuous Deployment (CI/CD)',
    definition:
      'This type of development focuses on automating the processes of code integration, testing, and deployment. The goal is to deliver smaller, frequent releases to production.',
  },
  {
    type: 'Cloud Development',
    definition:
      'Development for cloud platforms, which may include designing, building, and deploying software in cloud environments like AWS, Google Cloud, or Azure. Cloud-native development focuses on scalability, availability, and performance in the cloud.',
  },
  {
    type: 'Security Enhancements',
    definition:
      'Security development focuses on ensuring the software is secure, which could involve patching vulnerabilities, updating encryption standards, or adding new features to secure data.',
  },
  {
    type: 'End-of-Life (EOL) and Decommissioning',
    definition:
      'When a product reaches its end-of-life stage, development may focus on decommissioning features or migrating users to newer systems. This could include removing support for legacy systems or transferring data to newer platforms.',
  },
  {
    type: 'DevOps',
    definition:
      'DevOps focuses on integrating development and operations to improve the deployment cycle and application maintenance. It involves automating workflows, continuous monitoring, and ensuring that software is deployed, maintained, and updated efficiently.',
  },
];

export const jpdDevelopmentTypes = [
  {
    type: '新規プロジェクト開発',
    definition:
      'これは新しいソフトウェア製品またはシステムをゼロから作成することです。通常、要求の定義、アーキテクチャの設計、コードの作成、ソリューションのテストが含まれます。',
  },
  {
    type: '機能開発',
    definition:
      'これは既存のソフトウェア製品に新しい機能を追加することです。ユーザーからのフィードバックや新しい要求に基づいて、アプリケーションの機能を改善することに焦点を当てています。',
  },
  {
    type: 'アップグレード／バージョンアップ',
    definition:
      'この種類の開発は、既存のアプリケーションをソフトウェアの新しいバージョンに更新することです。新機能、パフォーマンスの改善、バグ修正、または新しい技術との互換性を確保するために基盤ライブラリやフレームワークのアップグレードが含まれることがあります。',
  },
  {
    type: 'バグ修正／問題解決',
    definition:
      'メンテナンス開発とも呼ばれ、これは既存のシステムでバグや問題を修正することに焦点を当てています。開発チームは、ユーザーやテスターが特定した問題に対応します。',
  },
  {
    type: 'リファクタリング',
    definition:
      'リファクタリングは、外部の動作を変更することなくコードの内部構造を改善することを指します。目的は、コードをより維持可能、効率的、またはスケーラブルにすることです。これは通常、将来の機能やアップグレードに備えるために行われます。',
  },
  {
    type: 'マイグレーション',
    definition:
      'マイグレーションは、ソフトウェアを1つの環境から別の環境に移動することを指します。これは異なるサーバー、プラットフォーム、またはクラウドプロバイダに移行すること、または古いシステム（例：レガシーシステム）からより現代的なシステムに移行することを含む場合があります。データマイグレーションも重要な部分であり、異なるアーキテクチャのシステム間でデータを移行する際に特に重要です。',
  },
  {
    type: '統合開発',
    definition:
      'これは異なるシステム、ツール、またはサービスを連携させて一緒に動作させることです。API、サードパーティサービスとの統合、またはより大きなエコシステム内での異なるソフトウェアコンポーネントの統合が含まれる場合があります。',
  },
  {
    type: 'カスタマイズ',
    definition:
      'カスタム開発は、特定のユーザーまたは組織のニーズに合わせてソフトウェアアプリケーションを修正または強化することに焦点を当てています。既存のソリューションをカスタム要件に合わせて調整することにより、特化した解決策を提供します。',
  },
  {
    type: 'プロトタイピング',
    definition:
      'プロトタイピングは、ソフトウェアシステムの初期バージョン（プロトタイプ）を開発して、その実現可能性を探るか、フルスケール開発の前にユーザーのニーズを検証することです。通常、製品設計の初期段階で使用されます。',
  },
  {
    type: 'テスト／品質保証 (QA)',
    definition:
      'テストは開発の重要な部分であり、ソフトウェアが意図した通りに動作することを保証します。このコンテキストでの開発は、テストスクリプトの作成、テストの自動化、ソフトウェアの異なるモジュールを開発プロセス全体で継続的にテストすることを含む場合があります。',
  },
  {
    type: '継続的インテグレーション／継続的デプロイメント (CI/CD)',
    definition:
      'この種類の開発は、コードの統合、テスト、およびデプロイメントのプロセスを自動化することに焦点を当てています。目標は、より小さな頻繁なリリースを本番環境に提供することです。',
  },
  {
    type: 'クラウド開発',
    definition:
      'クラウドプラットフォームのための開発で、AWS、Google Cloud、またはAzureなどのクラウド環境でソフトウェアの設計、構築、デプロイが含まれる場合があります。クラウドネイティブ開発は、クラウドでのスケーラビリティ、可用性、およびパフォーマンスに焦点を当てています。',
  },
  {
    type: 'セキュリティ強化',
    definition:
      'セキュリティ開発は、ソフトウェアの安全性を確保することに焦点を当てています。これには、脆弱性の修正、暗号化基準の更新、またはデータを保護する新しい機能の追加が含まれることがあります。',
  },
  {
    type: 'エンド・オブ・ライフ (EOL) および廃止',
    definition:
      '製品がエンド・オブ・ライフ段階に達すると、開発は機能の廃止やユーザーの新しいシステムへの移行に焦点を当てることがあります。これには、レガシーシステムのサポートの削除やデータの新しいプラットフォームへの移行が含まれる場合があります。',
  },
  {
    type: 'DevOps',
    definition:
      'DevOpsは、開発と運用を統合してデプロイメントサイクルとアプリケーションのメンテナンスを改善することに焦点を当てています。これには、ワークフローの自動化、継続的な監視、ソフトウェアが効率的にデプロイされ、維持され、更新されることを確保することが含まれます。',
  },
];
