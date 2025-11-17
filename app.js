// Demo Reporting Dashboard UI with static KPI data for three dummy apps.
// Built with React + Recharts via CDN, designed to run on GitHub Pages without any build step.

const { useState, useMemo } = React;
const {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} = Recharts;

const e = React.createElement;

const APPS = [
  {
    id: "alpha",
    name: "App Alpha",
    dailyMetrics: [
      {
        date: "2025-11-01",
        created: 120,
        updated: 80,
        deleted: 12,
        viewed: 360,
        totalUsers: 120,
        dailyActiveUsers: 74,
        totalRecords: 4800,
        medianChangeVolume: 1.6,
        medianChangeDepth: 2.2,
      },
      {
        date: "2025-11-02",
        created: 140,
        updated: 90,
        deleted: 14,
        viewed: 410,
        totalUsers: 122,
        dailyActiveUsers: 78,
        totalRecords: 4874,
        medianChangeVolume: 1.7,
        medianChangeDepth: 2.4,
      },
      {
        date: "2025-11-03",
        created: 135,
        updated: 96,
        deleted: 18,
        viewed: 398,
        totalUsers: 123,
        dailyActiveUsers: 82,
        totalRecords: 4945,
        medianChangeVolume: 1.8,
        medianChangeDepth: 2.3,
      },
      {
        date: "2025-11-04",
        created: 155,
        updated: 110,
        deleted: 16,
        viewed: 440,
        totalUsers: 124,
        dailyActiveUsers: 86,
        totalRecords: 5026,
        medianChangeVolume: 1.85,
        medianChangeDepth: 2.35,
      },
      {
        date: "2025-11-05",
        created: 162,
        updated: 108,
        deleted: 15,
        viewed: 452,
        totalUsers: 125,
        dailyActiveUsers: 90,
        totalRecords: 5096,
        medianChangeVolume: 1.9,
        medianChangeDepth: 2.4,
      },
      {
        date: "2025-11-06",
        created: 170,
        updated: 118,
        deleted: 13,
        viewed: 468,
        totalUsers: 126,
        dailyActiveUsers: 92,
        totalRecords: 5169,
        medianChangeVolume: 2.0,
        medianChangeDepth: 2.5,
      },
      {
        date: "2025-11-07",
        created: 168,
        updated: 120,
        deleted: 12,
        viewed: 470,
        totalUsers: 128,
        dailyActiveUsers: 95,
        totalRecords: 5227,
        medianChangeVolume: 2.05,
        medianChangeDepth: 2.55,
      },
      {
        date: "2025-11-08",
        created: 176,
        updated: 122,
        deleted: 16,
        viewed: 488,
        totalUsers: 129,
        dailyActiveUsers: 98,
        totalRecords: 5283,
        medianChangeVolume: 2.1,
        medianChangeDepth: 2.6,
      },
      {
        date: "2025-11-09",
        created: 182,
        updated: 126,
        deleted: 14,
        viewed: 496,
        totalUsers: 130,
        dailyActiveUsers: 100,
        totalRecords: 5349,
        medianChangeVolume: 2.15,
        medianChangeDepth: 2.65,
      },
      {
        date: "2025-11-10",
        created: 188,
        updated: 130,
        deleted: 13,
        viewed: 510,
        totalUsers: 131,
        dailyActiveUsers: 103,
        totalRecords: 5417,
        medianChangeVolume: 2.2,
        medianChangeDepth: 2.7,
      },
      {
        date: "2025-11-11",
        created: 194,
        updated: 128,
        deleted: 16,
        viewed: 522,
        totalUsers: 132,
        dailyActiveUsers: 104,
        totalRecords: 5488,
        medianChangeVolume: 2.25,
        medianChangeDepth: 2.72,
      },
      {
        date: "2025-11-12",
        created: 185,
        updated: 132,
        deleted: 17,
        viewed: 520,
        totalUsers: 133,
        dailyActiveUsers: 105,
        totalRecords: 5559,
        medianChangeVolume: 2.28,
        medianChangeDepth: 2.75,
      },
      {
        date: "2025-11-13",
        created: 192,
        updated: 136,
        deleted: 15,
        viewed: 534,
        totalUsers: 134,
        dailyActiveUsers: 108,
        totalRecords: 5631,
        medianChangeVolume: 2.3,
        medianChangeDepth: 2.78,
      },
      {
        date: "2025-11-14",
        created: 200,
        updated: 140,
        deleted: 18,
        viewed: 548,
        totalUsers: 135,
        dailyActiveUsers: 110,
        totalRecords: 5701,
        medianChangeVolume: 2.35,
        medianChangeDepth: 2.8,
      },
    ],
    systemStatus: {
      lastSuccessfulImport: "2025-11-16T02:00:00Z",
      imports: [
        { date: "2025-11-01", success: true },
        { date: "2025-11-02", success: true },
        { date: "2025-11-03", success: false },
        { date: "2025-11-04", success: true },
        { date: "2025-11-05", success: true },
        { date: "2025-11-06", success: true },
        { date: "2025-11-07", success: true },
        { date: "2025-11-08", success: true },
        { date: "2025-11-09", success: true },
        { date: "2025-11-10", success: false },
        { date: "2025-11-11", success: true },
        { date: "2025-11-12", success: true },
        { date: "2025-11-13", success: true },
        { date: "2025-11-14", success: true },
      ],
    },
  },
  {
    id: "beta",
    name: "App Beta",
    dailyMetrics: [
      {
        date: "2025-11-01",
        created: 80,
        updated: 45,
        deleted: 25,
        viewed: 260,
        totalUsers: 210,
        dailyActiveUsers: 94,
        totalRecords: 7200,
        medianChangeVolume: 1.2,
        medianChangeDepth: 1.7,
      },
      {
        date: "2025-11-02",
        created: 78,
        updated: 44,
        deleted: 22,
        viewed: 255,
        totalUsers: 210,
        dailyActiveUsers: 92,
        totalRecords: 7255,
        medianChangeVolume: 1.18,
        medianChangeDepth: 1.65,
      },
      {
        date: "2025-11-03",
        created: 75,
        updated: 48,
        deleted: 28,
        viewed: 250,
        totalUsers: 211,
        dailyActiveUsers: 90,
        totalRecords: 7308,
        medianChangeVolume: 1.22,
        medianChangeDepth: 1.68,
      },
      {
        date: "2025-11-04",
        created: 70,
        updated: 50,
        deleted: 26,
        viewed: 246,
        totalUsers: 211,
        dailyActiveUsers: 88,
        totalRecords: 7354,
        medianChangeVolume: 1.24,
        medianChangeDepth: 1.7,
      },
      {
        date: "2025-11-05",
        created: 68,
        updated: 52,
        deleted: 24,
        viewed: 242,
        totalUsers: 212,
        dailyActiveUsers: 86,
        totalRecords: 7396,
        medianChangeVolume: 1.26,
        medianChangeDepth: 1.72,
      },
      {
        date: "2025-11-06",
        created: 74,
        updated: 55,
        deleted: 22,
        viewed: 246,
        totalUsers: 212,
        dailyActiveUsers: 85,
        totalRecords: 7440,
        medianChangeVolume: 1.28,
        medianChangeDepth: 1.75,
      },
      {
        date: "2025-11-07",
        created: 72,
        updated: 54,
        deleted: 20,
        viewed: 244,
        totalUsers: 212,
        dailyActiveUsers: 84,
        totalRecords: 7492,
        medianChangeVolume: 1.3,
        medianChangeDepth: 1.76,
      },
      {
        date: "2025-11-08",
        created: 70,
        updated: 53,
        deleted: 18,
        viewed: 238,
        totalUsers: 212,
        dailyActiveUsers: 82,
        totalRecords: 7544,
        medianChangeVolume: 1.32,
        medianChangeDepth: 1.78,
      },
      {
        date: "2025-11-09",
        created: 68,
        updated: 56,
        deleted: 22,
        viewed: 236,
        totalUsers: 213,
        dailyActiveUsers: 80,
        totalRecords: 7588,
        medianChangeVolume: 1.34,
        medianChangeDepth: 1.8,
      },
      {
        date: "2025-11-10",
        created: 66,
        updated: 52,
        deleted: 24,
        viewed: 230,
        totalUsers: 213,
        dailyActiveUsers: 79,
        totalRecords: 7630,
        medianChangeVolume: 1.35,
        medianChangeDepth: 1.82,
      },
      {
        date: "2025-11-11",
        created: 62,
        updated: 50,
        deleted: 26,
        viewed: 228,
        totalUsers: 213,
        dailyActiveUsers: 78,
        totalRecords: 7672,
        medianChangeVolume: 1.36,
        medianChangeDepth: 1.83,
      },
      {
        date: "2025-11-12",
        created: 60,
        updated: 49,
        deleted: 24,
        viewed: 224,
        totalUsers: 213,
        dailyActiveUsers: 76,
        totalRecords: 7711,
        medianChangeVolume: 1.37,
        medianChangeDepth: 1.84,
      },
      {
        date: "2025-11-13",
        created: 58,
        updated: 48,
        deleted: 22,
        viewed: 220,
        totalUsers: 213,
        dailyActiveUsers: 75,
        totalRecords: 7751,
        medianChangeVolume: 1.38,
        medianChangeDepth: 1.85,
      },
      {
        date: "2025-11-14",
        created: 55,
        updated: 45,
        deleted: 21,
        viewed: 216,
        totalUsers: 214,
        dailyActiveUsers: 74,
        totalRecords: 7790,
        medianChangeVolume: 1.4,
        medianChangeDepth: 1.86,
      },
    ],
    systemStatus: {
      lastSuccessfulImport: "2025-11-15T23:00:00Z",
      imports: [
        { date: "2025-11-01", success: true },
        { date: "2025-11-02", success: true },
        { date: "2025-11-03", success: true },
        { date: "2025-11-04", success: true },
        { date: "2025-11-05", success: false },
        { date: "2025-11-06", success: false },
        { date: "2025-11-07", success: true },
        { date: "2025-11-08", success: true },
        { date: "2025-11-09", success: true },
        { date: "2025-11-10", success: true },
        { date: "2025-11-11", success: true },
        { date: "2025-11-12", success: true },
        { date: "2025-11-13", success: false },
        { date: "2025-11-14", success: true },
      ],
    },
  },
  {
    id: "gamma",
    name: "App Gamma",
    dailyMetrics: [
      {
        date: "2025-11-01",
        created: 45,
        updated: 60,
        deleted: 5,
        viewed: 180,
        totalUsers: 90,
        dailyActiveUsers: 48,
        totalRecords: 3100,
        medianChangeVolume: 2.3,
        medianChangeDepth: 3.0,
      },
      {
        date: "2025-11-02",
        created: 48,
        updated: 64,
        deleted: 6,
        viewed: 190,
        totalUsers: 90,
        dailyActiveUsers: 50,
        totalRecords: 3145,
        medianChangeVolume: 2.35,
        medianChangeDepth: 3.02,
      },
      {
        date: "2025-11-03",
        created: 52,
        updated: 70,
        deleted: 7,
        viewed: 198,
        totalUsers: 91,
        dailyActiveUsers: 52,
        totalRecords: 3193,
        medianChangeVolume: 2.4,
        medianChangeDepth: 3.05,
      },
      {
        date: "2025-11-04",
        created: 54,
        updated: 72,
        deleted: 6,
        viewed: 204,
        totalUsers: 91,
        dailyActiveUsers: 55,
        totalRecords: 3243,
        medianChangeVolume: 2.45,
        medianChangeDepth: 3.08,
      },
      {
        date: "2025-11-05",
        created: 58,
        updated: 76,
        deleted: 8,
        viewed: 214,
        totalUsers: 92,
        dailyActiveUsers: 58,
        totalRecords: 3297,
        medianChangeVolume: 2.48,
        medianChangeDepth: 3.1,
      },
      {
        date: "2025-11-06",
        created: 60,
        updated: 80,
        deleted: 7,
        viewed: 220,
        totalUsers: 92,
        dailyActiveUsers: 60,
        totalRecords: 3350,
        medianChangeVolume: 2.5,
        medianChangeDepth: 3.12,
      },
      {
        date: "2025-11-07",
        created: 62,
        updated: 82,
        deleted: 9,
        viewed: 224,
        totalUsers: 93,
        dailyActiveUsers: 61,
        totalRecords: 3403,
        medianChangeVolume: 2.52,
        medianChangeDepth: 3.14,
      },
      {
        date: "2025-11-08",
        created: 64,
        updated: 84,
        deleted: 10,
        viewed: 232,
        totalUsers: 93,
        dailyActiveUsers: 63,
        totalRecords: 3448,
        medianChangeVolume: 2.55,
        medianChangeDepth: 3.17,
      },
      {
        date: "2025-11-09",
        created: 66,
        updated: 86,
        deleted: 11,
        viewed: 236,
        totalUsers: 94,
        dailyActiveUsers: 64,
        totalRecords: 3490,
        medianChangeVolume: 2.6,
        medianChangeDepth: 3.2,
      },
      {
        date: "2025-11-10",
        created: 68,
        updated: 88,
        deleted: 10,
        viewed: 240,
        totalUsers: 94,
        dailyActiveUsers: 66,
        totalRecords: 3538,
        medianChangeVolume: 2.62,
        medianChangeDepth: 3.22,
      },
      {
        date: "2025-11-11",
        created: 70,
        updated: 90,
        deleted: 12,
        viewed: 244,
        totalUsers: 94,
        dailyActiveUsers: 68,
        totalRecords: 3586,
        medianChangeVolume: 2.64,
        medianChangeDepth: 3.24,
      },
      {
        date: "2025-11-12",
        created: 72,
        updated: 92,
        deleted: 11,
        viewed: 246,
        totalUsers: 95,
        dailyActiveUsers: 70,
        totalRecords: 3635,
        medianChangeVolume: 2.66,
        medianChangeDepth: 3.26,
      },
      {
        date: "2025-11-13",
        created: 74,
        updated: 96,
        deleted: 12,
        viewed: 250,
        totalUsers: 95,
        dailyActiveUsers: 72,
        totalRecords: 3686,
        medianChangeVolume: 2.7,
        medianChangeDepth: 3.3,
      },
      {
        date: "2025-11-14",
        created: 78,
        updated: 100,
        deleted: 13,
        viewed: 258,
        totalUsers: 95,
        dailyActiveUsers: 74,
        totalRecords: 3744,
        medianChangeVolume: 2.75,
        medianChangeDepth: 3.35,
      },
    ],
    systemStatus: {
      lastSuccessfulImport: "2025-11-14T19:30:00Z",
      imports: [
        { date: "2025-11-01", success: true },
        { date: "2025-11-02", success: false },
        { date: "2025-11-03", success: false },
        { date: "2025-11-04", success: true },
        { date: "2025-11-05", success: true },
        { date: "2025-11-06", success: true },
        { date: "2025-11-07", success: true },
        { date: "2025-11-08", success: true },
        { date: "2025-11-09", success: true },
        { date: "2025-11-10", success: true },
        { date: "2025-11-11", success: true },
        { date: "2025-11-12", success: true },
        { date: "2025-11-13", success: true },
        { date: "2025-11-14", success: true },
      ],
    },
  },
];

function computeRollingAverage(data, fieldName, windowSize, targetField) {
  const targetName = targetField || `${fieldName}Rolling`;
  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - windowSize + 1);
    const window = data.slice(start, i + 1);
    const sum = window.reduce((acc, entry) => acc + (entry[fieldName] || 0), 0);
    data[i][targetName] = Number((sum / window.length).toFixed(2));
  }
}

function computeReportSuccessRate(systemStatus) {
  const successCount = systemStatus.imports.filter((imp) => imp.success).length;
  const totalCount = systemStatus.imports.length;
  const percentage = totalCount === 0 ? 0 : Number(((successCount / totalCount) * 100).toFixed(1));
  return { percentage, successCount, totalCount };
}

function prepareDailyMetrics(metrics) {
  const enriched = metrics.map((entry) => ({ ...entry }));
  enriched.forEach((entry) => {
    entry.netGrowth = entry.created - entry.deleted;
    const eventsTotal = entry.created + entry.updated + entry.deleted + (entry.viewed || 0);
    entry.eventsPerUser = entry.dailyActiveUsers === 0 ? 0 : Number((eventsTotal / entry.dailyActiveUsers).toFixed(2));
  });

  computeRollingAverage(enriched, "dailyActiveUsers", 7);
  computeRollingAverage(enriched, "medianChangeVolume", 7);
  computeRollingAverage(enriched, "medianChangeDepth", 7);
  computeRollingAverage(enriched, "eventsPerUser", 7);
  return enriched;
}

function formatDateLabel(dateStr) {
  const date = new Date(dateStr);
  return `${date.getUTCDate().toString().padStart(2, "0")}.${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
}

function formatDateTime(dateStr) {
  const date = new Date(dateStr);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${day}.${month}.${year} ${hours}:${minutes} UTC`;
}

function App() {
  const [selectedAppId, setSelectedAppId] = useState(APPS[0].id);

  const selectedApp = useMemo(() => APPS.find((app) => app.id === selectedAppId), [selectedAppId]);

  const processedApp = useMemo(() => {
    if (!selectedApp) return null;
    return {
      ...selectedApp,
      dailyMetrics: prepareDailyMetrics(selectedApp.dailyMetrics),
      systemStatus: selectedApp.systemStatus,
    };
  }, [selectedApp]);

  if (!processedApp) {
    return e("div", null, "No app data available");
  }

  return e(
    "div",
    { className: "layout" },
    e(Sidebar, { apps: APPS, selectedAppId, onSelectApp: setSelectedAppId }),
    e(
      "div",
      { className: "content" },
      e(
        "div",
        { className: "header-row" },
        e("h1", null, processedApp.name),
        e("p", { className: "section-description" }, "Static demo dashboard with daily KPI slices")
      ),
      e(Dashboard, { app: processedApp })
    )
  );
}

function Sidebar({ apps, selectedAppId, onSelectApp }) {
  return e(
    "div",
    { className: "sidebar" },
    e("h1", null, "Reporting Apps"),
    ...apps.map((app) =>
      e(
        "button",
        {
          key: app.id,
          className: `app-button ${selectedAppId === app.id ? "active" : ""}`,
          onClick: () => onSelectApp(app.id),
        },
        app.name
      )
    )
  );
}

function Dashboard({ app }) {
  const latestDay = app.dailyMetrics[app.dailyMetrics.length - 1];
  const reportSuccess = computeReportSuccessRate(app.systemStatus);

  return e(
    "div",
    null,
    e(SystemStatusSection, { systemStatus: app.systemStatus, reportSuccess }),
    e(EntryRelatedSection, { dailyMetrics: app.dailyMetrics, latestDay }),
    e(UserRelatedSection, { dailyMetrics: app.dailyMetrics, latestDay }),
    e(DataSetsSection, { dailyMetrics: app.dailyMetrics, latestDay }),
    e(ChangeDynamicsSection, { dailyMetrics: app.dailyMetrics, latestDay })
  );
}

function Section({ title, description, children }) {
  return e(
    "div",
    { className: "section" },
    e(
      "div",
      { className: "header-row" },
      e("h2", null, title),
      description ? e("p", { className: "section-description" }, description) : null
    ),
    children
  );
}

function KpiCard({ title, value, subtitle, optional }) {
  return e(
    "div",
    { className: "kpi-card" },
    e(
      "p",
      { className: "kpi-title" },
      title,
      optional ? e("span", { className: "tag-optional" }, "optional") : null
    ),
    e("div", { className: "kpi-value" }, value),
    subtitle ? e("p", { className: "kpi-subtitle" }, subtitle) : null
  );
}

function SystemStatusSection({ systemStatus, reportSuccess }) {
  const importChartData = systemStatus.imports.map((imp) => ({
    ...imp,
    label: formatDateLabel(imp.date),
    value: imp.success ? 1 : 0,
  }));

  return e(
    Section,
    { title: "System Status", description: "Import health and pipeline success" },
    e(
      "div",
      { className: "kpi-grid" },
      e(KpiCard, {
        title: "Last Successful Import",
        value: formatDateTime(systemStatus.lastSuccessfulImport),
        subtitle: "UTC",
      }),
      e(KpiCard, {
        title: "Report Success Rate (14d)",
        value: `${reportSuccess.percentage}%`,
        subtitle: `${reportSuccess.successCount} / ${reportSuccess.totalCount} successful imports`,
      })
    ),
    e(
      "div",
      { className: "charts-grid" },
      e(
        "div",
        { className: "chart-card" },
        e(ResponsiveContainer, { width: "100%", height: "100%" },
          e(BarChart, { data: importChartData },
            e(CartesianGrid, { strokeDasharray: "3 3" }),
            e(XAxis, { dataKey: "label" }),
            e(YAxis, { domain: [0, 1], allowDecimals: false }),
            e(Tooltip, {
              formatter: (value) => (value === 1 ? "Success" : "Failure"),
              labelFormatter: (label) => `Import ${label}`,
            }),
            e(Bar, { dataKey: "value", fill: "#22c55e" })
          )
        )
      )
    )
  );
}

function EntryRelatedSection({ dailyMetrics, latestDay }) {
  const pieData = [
    { name: "Created", value: latestDay.created, color: "#2563eb" },
    { name: "Updated", value: latestDay.updated, color: "#fb923c" },
    { name: "Deleted", value: latestDay.deleted, color: "#ef4444" },
  ];

  const lineChartData = dailyMetrics.map((d) => ({
    ...d,
    label: formatDateLabel(d.date),
  }));

  return e(
    Section,
    { title: "Entry Related", description: "CRUD activity and read behavior" },
    e(
      "div",
      { className: "kpi-grid" },
      e(KpiCard, { title: "Created Entries", value: latestDay.created }),
      e(KpiCard, { title: "Updated Entries", value: latestDay.updated }),
      e(KpiCard, { title: "Deleted Entries", value: latestDay.deleted }),
      e(KpiCard, { title: "Read / Viewed Entries", value: latestDay.viewed, optional: true })
    ),
    e(
      "div",
      { className: "charts-grid" },
      e(
        "div",
        { className: "chart-card" },
        e(ResponsiveContainer, { width: "100%", height: "100%" },
          e(LineChart, { data: lineChartData },
            e(CartesianGrid, { strokeDasharray: "3 3" }),
            e(XAxis, { dataKey: "label" }),
            e(YAxis, null),
            e(Tooltip, null),
            e(Legend, null),
            e(Line, { type: "monotone", dataKey: "created", stroke: "#2563eb", strokeWidth: 2, dot: false }),
            e(Line, { type: "monotone", dataKey: "updated", stroke: "#fb923c", strokeWidth: 2, dot: false }),
            e(Line, { type: "monotone", dataKey: "deleted", stroke: "#ef4444", strokeWidth: 2, dot: false }),
            e(Line, { type: "monotone", dataKey: "viewed", stroke: "#22c55e", strokeWidth: 2, dot: false })
          )
        )
      ),
      e(
        "div",
        { className: "chart-card" },
        e(ResponsiveContainer, { width: "100%", height: "100%" },
          e(PieChart, null,
            e(Tooltip, null),
            e(Legend, null),
            e(Pie, { data: pieData, dataKey: "value", nameKey: "name", innerRadius: 50, outerRadius: 90 },
              pieData.map((entry) => e(Cell, { key: entry.name, fill: entry.color }))
            )
          )
        )
      )
    )
  );
}

function UserRelatedSection({ dailyMetrics, latestDay }) {
  const chartData = dailyMetrics.map((d) => ({ ...d, label: formatDateLabel(d.date) }));

  return e(
    Section,
    { title: "User Related", description: "Engagement and per-user activity" },
    e(
      "div",
      { className: "kpi-grid" },
      e(KpiCard, { title: "Total Users", value: latestDay.totalUsers }),
      e(KpiCard, {
        title: "Daily Active Users",
        value: latestDay.dailyActiveUsers,
        subtitle: `7d \u00d8: ${latestDay.dailyActiveUsersRolling}`,
      }),
      e(KpiCard, {
        title: "Events per User",
        value: latestDay.eventsPerUser,
        subtitle: `7d \u00d8: ${latestDay.eventsPerUserRolling}`,
      })
    ),
    e(
      "div",
      { className: "charts-grid" },
      e(
        "div",
        { className: "chart-card" },
        e(ResponsiveContainer, { width: "100%", height: "100%" },
          e(LineChart, { data: chartData },
            e(CartesianGrid, { strokeDasharray: "3 3" }),
            e(XAxis, { dataKey: "label" }),
            e(YAxis, null),
            e(Tooltip, null),
            e(Legend, null),
            e(Line, { type: "monotone", dataKey: "dailyActiveUsers", stroke: "#2563eb", strokeWidth: 2, dot: false, name: "DAU" }),
            e(Line, { type: "monotone", dataKey: "dailyActiveUsersRolling", stroke: "#0ea5e9", strokeDasharray: "4 4", strokeWidth: 2, dot: false, name: "DAU 7d Avg" })
          )
        )
      ),
      e(
        "div",
        { className: "chart-card" },
        e(ResponsiveContainer, { width: "100%", height: "100%" },
          e(LineChart, { data: chartData },
            e(CartesianGrid, { strokeDasharray: "3 3" }),
            e(XAxis, { dataKey: "label" }),
            e(YAxis, null),
            e(Tooltip, null),
            e(Legend, null),
            e(Line, { type: "monotone", dataKey: "eventsPerUser", stroke: "#16a34a", strokeWidth: 2, dot: false, name: "Events/User" }),
            e(Line, { type: "monotone", dataKey: "eventsPerUserRolling", stroke: "#22c55e", strokeDasharray: "4 4", strokeWidth: 2, dot: false, name: "Events/User 7d Avg" })
          )
        )
      )
    )
  );
}

function DataSetsSection({ dailyMetrics, latestDay }) {
  const chartData = dailyMetrics.map((d) => ({ ...d, label: formatDateLabel(d.date) }));

  return e(
    Section,
    { title: "Data Sets", description: "Inventory size and growth" },
    e(
      "div",
      { className: "kpi-grid" },
      e(KpiCard, { title: "Total Records", value: latestDay.totalRecords }),
      e(KpiCard, { title: "Net Dataset Growth", value: latestDay.netGrowth }),
    ),
    e(
      "div",
      { className: "charts-grid" },
      e(
        "div",
        { className: "chart-card" },
        e(ResponsiveContainer, { width: "100%", height: "100%" },
          e(AreaChart, { data: chartData },
            e(DefsGradient, { id: "recordsGradient" }),
            e(CartesianGrid, { strokeDasharray: "3 3" }),
            e(XAxis, { dataKey: "label" }),
            e(YAxis, null),
            e(Tooltip, null),
            e(Area, { type: "monotone", dataKey: "totalRecords", stroke: "#2563eb", fill: "url(#recordsGradient)", strokeWidth: 2, dot: false })
          )
        )
      ),
      e(
        "div",
        { className: "chart-card" },
        e(ResponsiveContainer, { width: "100%", height: "100%" },
          e(BarChart, { data: chartData },
            e(CartesianGrid, { strokeDasharray: "3 3" }),
            e(XAxis, { dataKey: "label" }),
            e(YAxis, null),
            e(Tooltip, null),
            e(Bar, { dataKey: "netGrowth", fill: "#16a34a" })
          )
        )
      )
    )
  );
}

function DefsGradient({ id }) {
  return e(
    "defs",
    null,
    e(
      "linearGradient",
      { id, x1: "0", y1: "0", x2: "0", y2: "1" },
      e("stop", { offset: "5%", stopColor: "#2563eb", stopOpacity: 0.3 }),
      e("stop", { offset: "95%", stopColor: "#2563eb", stopOpacity: 0 })
    )
  );
}

function ChangeDynamicsSection({ dailyMetrics, latestDay }) {
  const chartData = dailyMetrics.map((d) => ({ ...d, label: formatDateLabel(d.date) }));

  return e(
    Section,
    { title: "Change Dynamics", description: "Change intensity and depth" },
    e(
      "div",
      { className: "kpi-grid" },
      e(KpiCard, {
        title: "Median Change Volume / Item",
        value: `${latestDay.medianChangeVolume} changes`,
        subtitle: `7d \u00d8: ${latestDay.medianChangeVolumeRolling}`,
      }),
      e(KpiCard, {
        title: "Median Change Depth / Item",
        value: `${latestDay.medianChangeDepth} fields`,
        subtitle: `7d \u00d8: ${latestDay.medianChangeDepthRolling}`,
      })
    ),
    e(
      "div",
      { className: "charts-grid" },
      e(
        "div",
        { className: "chart-card", style: { gridColumn: "1 / -1" } },
        e(ResponsiveContainer, { width: "100%", height: "100%" },
          e(LineChart, { data: chartData },
            e(CartesianGrid, { strokeDasharray: "3 3" }),
            e(XAxis, { dataKey: "label" }),
            e(YAxis, null),
            e(Tooltip, null),
            e(Legend, null),
            e(Line, { type: "monotone", dataKey: "medianChangeVolume", stroke: "#2563eb", strokeWidth: 2, dot: false, name: "Change Volume" }),
            e(Line, { type: "monotone", dataKey: "medianChangeDepth", stroke: "#fb923c", strokeWidth: 2, dot: false, name: "Change Depth" }),
            e(Line, { type: "monotone", dataKey: "medianChangeVolumeRolling", stroke: "#0ea5e9", strokeDasharray: "4 4", strokeWidth: 2, dot: false, name: "Volume 7d Avg" }),
            e(Line, { type: "monotone", dataKey: "medianChangeDepthRolling", stroke: "#f59e0b", strokeDasharray: "4 4", strokeWidth: 2, dot: false, name: "Depth 7d Avg" })
          )
        )
      )
    )
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App));
