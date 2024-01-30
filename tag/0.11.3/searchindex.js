Search.setIndex({"docnames": ["alertmanager_role", "blackbox_exporter_role", "cadvisor_role", "chrony_exporter_role", "environment_variables", "index", "ipmi_exporter_role", "memcached_exporter_role", "mysqld_exporter_role", "node_exporter_role", "prometheus_role", "pushgateway_role", "smartctl_exporter_role", "smokeping_prober_role", "snmp_exporter_role", "systemd_exporter_role"], "filenames": ["alertmanager_role.rst", "blackbox_exporter_role.rst", "cadvisor_role.rst", "chrony_exporter_role.rst", "environment_variables.rst", "index.rst", "ipmi_exporter_role.rst", "memcached_exporter_role.rst", "mysqld_exporter_role.rst", "node_exporter_role.rst", "prometheus_role.rst", "pushgateway_role.rst", "smartctl_exporter_role.rst", "smokeping_prober_role.rst", "snmp_exporter_role.rst", "systemd_exporter_role.rst"], "titles": ["prometheus.prometheus.alertmanager role \u2013 Prometheus Alertmanager service", "prometheus.prometheus.blackbox_exporter role \u2013 Deploy and manage Prometheus blackbox exporter", "prometheus.prometheus.cadvisor role \u2013 cAdvisor", "prometheus.prometheus.chrony_exporter role \u2013 Prometheus Chrony Exporter", "Index of all Collection Environment Variables", "Prometheus.Prometheus", "prometheus.prometheus.ipmi_exporter role \u2013 Prometheus ipmi_exporter", "prometheus.prometheus.memcached_exporter role \u2013 Prometheus memcached_exporter", "prometheus.prometheus.mysqld_exporter role \u2013 Prometheus MySQLd Exporter", "prometheus.prometheus.node_exporter role \u2013 Prometheus Node Exporter", "prometheus.prometheus.prometheus role \u2013 Installs and configures prometheus", "prometheus.prometheus.pushgateway role \u2013 Prometheus Pushgateway", "prometheus.prometheus.smartctl_exporter role \u2013 Prometheus Smartctl Exporter", "prometheus.prometheus.smokeping_prober role \u2013 Prometheus Smokeping Prober", "prometheus.prometheus.snmp_exporter role \u2013 Prometheus SNMP exporter", "prometheus.prometheus.systemd_exporter role \u2013 Prometheus Systemd Exporter"], "terms": {"thi": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "i": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "part": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "version": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "0": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "11": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "3": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "It": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "includ": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "ansibl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "core": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "To": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "check": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "whether": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "instal": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15], "run": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "galaxi": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "list": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "us": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "playbook": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "specifi": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "deploi": [0, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15], "manag": [0, 5, 10, 14], "comment": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "alertmanager_amtool_config_alertmanager_url": 0, "string": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "url": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "default": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "alertmanager_web_external_url": 0, "alertmanager_amtool_config_fil": 0, "templat": [0, 10], "amtool": 0, "config": [0, 3, 6, 7, 8, 9, 10, 11, 12, 13], "yml": [0, 10, 13, 14], "j2": [0, 10], "alertmanager_amtool_config_output": 0, "extend": 0, "output": [0, 6, 7, 12], "simpl": 0, "alertmanager_binary_local_dir": 0, "allow": [0, 1, 10, 15], "local": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "packag": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "instead": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "ones": [0, 10, 15], "distribut": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "github": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "As": [0, 10, 15], "take": [0, 10, 12, 15], "directori": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "where": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "AND": [0, 10], "binari": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "ar": [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "store": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "host": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "which": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "ran": [0, 10], "overrid": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "alertmanager_vers": 0, "alertmanager_binary_url": 0, "tar": [0, 1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "gz": [0, 1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "file": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "http": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "com": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "_alertmanager_repo": 0, "releas": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "download": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "v": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "linux": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "go_arch": [0, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15], "alertmanager_checksums_url": 0, "checksum": [0, 1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "sha256sum": [0, 1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "txt": [0, 1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "alertmanager_clust": 0, "dictionari": [0, 1, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15], "ha": 0, "cluster": 0, "network": 0, "configur": [0, 1, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15], "disabl": [0, 3, 8, 9, 10, 12], "more": [0, 9, 15], "inform": [0, 9], "readm": 0, "listen": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "address": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "alertmanager_config_dir": 0, "path": [0, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14], "etc": [0, 1, 8, 10, 13], "alertmanager_config_fil": 0, "variabl": [0, 10], "provid": [0, 10], "custom": [0, 10, 14], "form": [0, 10], "alertmanager_config_flags_extra": 0, "addit": [0, 1, 10], "flag": [0, 1, 10], "pass": [0, 1, 10], "startup": [0, 1, 10], "alertmanager_db_dir": 0, "databas": [0, 10], "var": [0, 9, 10], "lib": [0, 9, 10], "alertmanager_hipchat_api_url": 0, "hipchat": 0, "webhook": 0, "alertmanager_hipchat_auth_token": 0, "authent": [0, 3, 6, 7, 8, 9, 11, 12, 13, 15], "token": 0, "alertmanager_http_config": 0, "alertmanager_inhibit_rul": 0, "element": [0, 3, 8, 9, 10, 12, 13], "inhibit": 0, "rule": [0, 10], "same": [0, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15], "offici": [0, 10], "doc": [0, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15], "alertmanager_opsgenie_api_kei": 0, "opsgeni": 0, "kei": [0, 3, 6, 7, 8, 9, 11, 12, 13, 15], "alertmanager_opsgenie_api_url": 0, "alertmanager_pagerduty_url": 0, "pagerduti": 0, "alertmanager_receiv": 0, "A": [0, 10], "notif": 0, "receiv": 0, "alertmanager_resolve_timeout": 0, "time": [0, 10], "after": 0, "an": 0, "alert": [0, 10], "declar": [0, 4], "resolv": 0, "3m": 0, "alertmanager_rout": 0, "rout": 0, "alertmanager_skip_instal": 0, "boolean": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "task": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "get": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "skip": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "when": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "set": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "true": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "choic": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "fals": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "alertmanager_slack_api_url": 0, "slack": 0, "alertmanager_smtp": 0, "smtp": 0, "email": 0, "alertmanager_template_fil": 0, "folder": [0, 10], "look": [0, 10], "copi": [0, 10], "must": [0, 9, 10], "have": [0, 4, 10], "tmpl": 0, "extens": [0, 10], "alertmanager_time_interv": 0, "interv": [0, 12], "also": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "accept": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "latest": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "26": 0, "alertmanager_victorops_api_kei": 0, "victorop": 0, "alertmanager_victorops_api_url": 0, "extern": [0, 10], "avail": [0, 10, 12], "behind": [0, 10], "revers": [0, 10], "proxi": [0, 10], "ex": [0, 10], "exampl": [0, 10], "org": [0, 10], "localhost": [0, 10], "9093": 0, "alertmanager_web_listen_address": 0, "alertmanager_wechat_corp_id": 0, "enterpris": 0, "wechat": 0, "corpor": 0, "id": 0, "alertmanager_wechat_secret": 0, "secret": [0, 8], "alertmanager_wechat_url": 0, "commun": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "issu": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "tracker": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "homepag": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "repositori": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "sourc": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "probe": [1, 13], "endpoint": 1, "over": 1, "dn": 1, "tcp": 1, "icmp": 1, "blackbox_exporter_binary_install_dir": 1, "advanc": [1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15], "usr": [1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15], "bin": [1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15], "blackbox_exporter_binary_local_dir": 1, "enabl": [1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14, 15], "those": [1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14], "The": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14], "mai": [1, 2, 3, 6, 7, 8, 9, 11, 12, 13], "blackbox_exporter_vers": 1, "blackbox_exporter_binary_url": 1, "_blackbox_exporter_repo": 1, "go_arch_map": [1, 14], "ansible_architectur": [1, 14], "blackbox_exporter_checksums_url": 1, "blackbox_exporter_cli_flag": 1, "blackbox_exporter_config_dir": 1, "place": [1, 12], "blackbox_exporter_configuration_modul": 1, "http_2xx": 1, "method": 1, "valid_status_cod": 1, "prober": [1, 5], "timeout": [1, 10], "5": 1, "blackbox_exporter_group": 1, "group": [1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 15], "exp": [1, 3, 6, 7, 8, 9, 12], "blackbox_exporter_skip_instal": 1, "blackbox_exporter_us": 1, "user": [1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 15], "24": 1, "blackbox_exporter_web_listen_address": 1, "9115": 1, "cadvisor_binary_install_dir": 2, "cadvisor_binary_local_dir": 2, "cadvisor_vers": 2, "cadvisor_binary_url": 2, "_cadvisor_repo": 2, "cadvisor_listen_ip": 2, "cadvisor_port": 2, "port": [2, 8], "8080": 2, "cadvisor_prometheus_endpoint": 2, "under": [2, 3, 7, 8, 9, 11, 12, 13], "expos": [2, 3, 7, 8, 9, 11, 12, 13], "metric": [2, 3, 7, 8, 9, 10, 11, 12, 13, 15], "cadvisor_skip_instal": 2, "cadvisor_system_group": 2, "system": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 15], "root": [2, 15], "cadvisor_system_us": 2, "47": 2, "2": [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "chrony_exporter_basic_auth_us": 3, "password": [3, 6, 7, 8, 9, 11, 12, 13], "basic": [3, 6, 7, 8, 9, 11, 12, 13], "automat": [3, 5, 6, 7, 8, 9, 11, 12, 13], "hash": [3, 6, 7, 8, 9, 11, 12, 13], "bcrypt": [3, 6, 7, 8, 9, 11, 12, 13], "chrony_exporter_binary_install_dir": 3, "chrony_exporter_binary_local_dir": 3, "chrony_exporter_vers": 3, "chrony_exporter_binary_url": 3, "_chrony_exporter_repo": 3, "chrony_exporter_checksums_url": 3, "chrony_exporter_disabled_collector": 3, "collector": [3, 8, 9], "By": [3, 8, 9], "here": [3, 8, 9], "chrony_exporter_enabled_collector": 3, "dict": [3, 8, 9], "defin": [3, 4, 8, 9], "addition": [3, 8, 9], "add": [3, 8, 9], "track": 3, "chrony_exporter_http_server_config": 3, "support": [3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "valu": [3, 6, 7, 8, 9, 10, 11, 12, 13, 15], "chrony_exporter_skip_instal": 3, "chrony_exporter_system_group": 3, "chrony_exporter_system_us": 3, "chrony_exporter_tls_server_config": 3, "tl": [3, 6, 7, 8, 9, 10, 11, 12, 13, 15], "8": [3, 6], "chrony_exporter_web_listen_address": 3, "9123": 3, "chrony_exporter_web_telemetry_path": 3, "follow": 4, "document": [4, 5], "plugin": 4, "No": 4, "been": 4, "collect": 5, "author": 5, "ben": 5, "kochi": 5, "superq": [5, 13], "gar\u00f0ar": 5, "arnarsson": 5, "gardar": 5, "pawe\u0142": 5, "krupa": 5, "paulfantom": 5, "9": 5, "newer": 5, "16": 5, "99": 5, "older": 5, "There": 5, "gener": 5, "These": 5, "alertmanag": [5, 10], "servic": [5, 14, 15], "blackbox_export": 5, "blackbox": 5, "export": [5, 6, 7], "cadvisor": 5, "chrony_export": 5, "chroni": 5, "ipmi_export": 5, "memcached_export": 5, "mysqld_export": 5, "mysqld": 5, "node_export": 5, "node": [5, 10], "pushgatewai": 5, "smartctl_export": 5, "smartctl": 5, "smokeping_prob": 5, "smokep": 5, "snmp_export": 5, "snmp": 5, "systemd_export": 5, "systemd": [5, 9, 10], "ipmi": 6, "ipmi_exporter_basic_auth_us": 6, "ipmi_exporter_binary_install_dir": 6, "ipmi_exporter_binary_local_dir": 6, "ipmi_exporter_vers": 6, "ipmi_exporter_binary_url": 6, "_ipmi_exporter_repo": 6, "ipmi_exporter_checksums_url": 6, "ipmi_exporter_http_server_config": 6, "ipmi_exporter_log_format": 6, "format": [6, 7, 10, 12], "log": [6, 7, 12, 14, 15], "messag": [6, 7, 12, 15], "One": [6, 7, 12], "logfmt": [6, 7, 12], "json": [6, 7, 10, 12], "ipmi_exporter_log_level": 6, "onli": [6, 7, 10, 12, 15], "given": [6, 7, 12, 15], "sever": [6, 7, 12, 15], "abov": [6, 7, 12, 15], "debug": [6, 7, 12], "info": [6, 7, 12, 14], "warn": [6, 7, 12], "error": [6, 7, 12], "ipmi_exporter_modul": 6, "modul": 6, "ipmi_exporter_skip_instal": 6, "ipmi_exporter_system_group": 6, "ipmi_exporter_system_us": 6, "ipmi_exporter_tls_server_config": 6, "1": [6, 8, 9, 10, 11, 12, 13], "ipmi_exporter_web_listen_address": 6, "9290": 6, "memcach": 7, "memcached_exporter_basic_auth_us": 7, "memcached_exporter_binary_install_dir": 7, "memcached_exporter_binary_local_dir": 7, "memcached_exporter_vers": 7, "memcached_exporter_binary_url": 7, "_memcached_exporter_repo": 7, "memcached_exporter_checksums_url": 7, "memcached_exporter_http_server_config": 7, "memcached_exporter_log_format": 7, "memcached_exporter_log_level": 7, "memcached_exporter_memcached_pid_fil": 7, "pid": 7, "process": 7, "monitor": [7, 10, 12], "memcached_exporter_skip_instal": 7, "memcached_exporter_system_group": 7, "memcached_exporter_system_us": 7, "memcached_exporter_tls_server_config": 7, "14": 7, "memcached_exporter_web_listen_address": 7, "9150": 7, "memcached_exporter_web_telemetry_path": 7, "mysqld_exporter_basic_auth_us": 8, "mysqld_exporter_binary_install_dir": 8, "mysqld_exporter_binary_local_dir": 8, "mysqld_exporter_vers": 8, "mysqld_exporter_binary_url": 8, "_mysqld_exporter_repo": 8, "mysqld_exporter_checksums_url": 8, "mysqld_exporter_config_dir": 8, "mysqld_exporter_config_fil": 8, "filenam": [8, 13], "mysql": 8, "cnf": 8, "mysqld_exporter_disabled_collector": 8, "mysqld_exporter_enabled_collector": 8, "mysqld_exporter_host": 8, "target": [8, 10, 13], "mysqld_exporter_http_server_config": 8, "mysqld_exporter_password": 8, "login": 8, "mysqld_exporter_port": 8, "mysqld_exporter_skip_instal": 8, "mysqld_exporter_socket": 8, "unix": 8, "socket": 8, "sock": 8, "mysqld_exporter_system_group": 8, "mysqld_exporter_system_us": 8, "mysqld_exporter_tls_server_config": 8, "mysqld_exporter_usernam": 8, "usernam": 8, "15": [8, 10], "mysqld_exporter_web_listen_address": 8, "9104": 8, "mysqld_exporter_web_telemetry_path": 8, "node_exporter_basic_auth_us": 9, "node_exporter_binary_install_dir": 9, "node_exporter_binary_local_dir": 9, "node_exporter_vers": 9, "node_exporter_binary_url": 9, "_node_exporter_repo": 9, "node_exporter_checksums_url": 9, "node_exporter_disabled_collector": 9, "node_exporter_enabled_collector": 9, "textfil": 9, "node_exporter_textfile_dir": 9, "node_exporter_http_server_config": 9, "node_exporter_skip_instal": 9, "node_exporter_system_group": 9, "node_exporter_system_us": 9, "permiss": 9, "write": [9, 10], "note": 9, "troubleshoot": 9, "md": 9, "guid": 9, "node_exporter_tls_server_config": 9, "7": [9, 11, 13], "node_exporter_web_listen_address": 9, "9100": 9, "node_exporter_web_telemetry_path": 9, "prometheus_agent_mod": 10, "agent": 10, "mode": 10, "optim": 10, "remot": 10, "case": 10, "queri": 10, "storag": 10, "replac": 10, "tsdb": 10, "wal": 10, "everyth": 10, "els": 10, "stai": 10, "featur": [10, 15], "start": 10, "from": [10, 12, 14], "v2": 10, "32": 10, "prometheus_alert_relabel_config": 10, "relabel": 10, "should": [10, 14], "yaml": 10, "compat": 10, "alert_relabel_config": 10, "prometheus_alert_rul": 10, "full": 10, "prometheus_config_dir": 10, "ansible_manag": 10, "can": 10, "other": 10, "locat": 10, "pleas": 10, "see": [10, 13], "prometheus_alert_rules_fil": 10, "contain": [10, 14], "prometheus_alertmanager_config": 10, "respons": 10, "alertmanager_config": 10, "prometheus_binary_local_dir": 10, "promtool": 10, "prometheus_vers": 10, "prometheus_binary_url": 10, "_prometheus_repo": 10, "prometheus_checksums_url": 10, "prometheus_config_fil": 10, "prometheus_config_flags_extra": 10, "retent": 10, "15d": 10, "10": 10, "prometheus_db_dir": 10, "prometheus_external_label": 10, "map": 10, "label": 10, "ad": 10, "ani": [10, 12], "seri": 10, "environ": 10, "ansible_fqdn": 10, "ansible_host": 10, "inventory_hostnam": 10, "prometheus_glob": 10, "global": 10, "evaluation_interv": 10, "scrape_interv": 10, "60": [10, 12], "scrape_timeout": 10, "prometheus_metrics_path": 10, "prometheus_web_external_url": 10, "regex_replac": 10, "prometheus_read_only_dir": 10, "read": 10, "ssl": 10, "cert": 10, "outsid": 10, "prometheus_remote_read": 10, "prometheus_remote_writ": 10, "prometheus_scrape_config": 10, "scrape": 10, "job": 10, "job_nam": 10, "metrics_path": 10, "static_config": 10, "9090": 10, "file_sd_config": 10, "file_sd": 10, "prometheus_skip_instal": 10, "prometheus_static_targets_fil": 10, "static": 10, "prometheus_stop_timeout": 10, "how": 10, "long": 10, "wait": 10, "shutdown": 10, "timeoutstopsec": 10, "spec": 10, "600": 10, "prometheus_storage_retent": 10, "data": 10, "period": 10, "30d": 10, "prometheus_storage_retention_s": 10, "size": [10, 15], "maximum": 10, "number": 10, "byte": 10, "block": 10, "unit": [10, 15], "kb": 10, "mb": 10, "gb": 10, "tb": 10, "pb": 10, "prometheus_target": 10, "x": [10, 15], "49": 10, "prometheus_web_config": 10, "web": 10, "auth": 10, "prometheus_web_listen_address": 10, "pushgateway_basic_auth_us": 11, "pushgateway_binary_install_dir": 11, "pushgateway_binary_local_dir": 11, "pushgateway_vers": 11, "pushgateway_binary_url": 11, "_pushgateway_repo": 11, "pushgateway_checksums_url": 11, "pushgateway_http_server_config": 11, "pushgateway_skip_instal": 11, "pushgateway_system_group": 11, "pushgateway_system_us": 11, "pushgateway_tls_server_config": 11, "pushgateway_web_listen_address": 11, "9091": 11, "pushgateway_web_telemetry_path": 11, "smartctl_exporter_basic_auth_us": 12, "smartctl_exporter_binary_install_dir": 12, "smartctl_exporter_binary_local_dir": 12, "smartctl_exporter_vers": 12, "smartctl_exporter_binary_url": 12, "_smartctl_exporter_repo": 12, "smartctl_exporter_checksums_url": 12, "smartctl_exporter_http_server_config": 12, "smartctl_exporter_log_format": 12, "smartctl_exporter_log_level": 12, "smartctl_exporter_skip_instal": 12, "smartctl_exporter_smartctl_device_exclud": 12, "regexp": 12, "devic": 12, "exclud": [12, 15], "scan": 12, "mutual": 12, "exclus": 12, "smartctl_exporter_smartctl_device_includ": 12, "smartctl_exporter_smartctl_devic": 12, "auto": 12, "smartctl_exporter_smartctl_interv": 12, "between": 12, "poll": 12, "smartctl_exporter_smartctl_path": 12, "sbin": 12, "smartctl_exporter_smartctl_rescan": 12, "rescan": 12, "new": 12, "disappear": 12, "If": [12, 14], "smaller": 12, "than": 12, "norescan": 12, "10m": 12, "smartctl_exporter_system_group": 12, "smartctl_exporter_system_us": 12, "smartctl_exporter_tls_server_config": 12, "smartctl_exporter_web_listen_address": 12, "9633": 12, "smartctl_exporter_web_telemetry_path": 12, "smokeping_prober_basic_auth_us": 13, "smokeping_prober_binary_install_dir": 13, "smokeping_prober_binary_local_dir": 13, "smokeping_prober_vers": 13, "smokeping_prober_binary_url": 13, "_smokeping_prober_repo": 13, "smokeping_prober_checksums_url": 13, "smokeping_prober_config_dir": 13, "smokeping_prober_config_fil": 13, "smokeping_prober_http_server_config": 13, "smokeping_prober_skip_instal": 13, "smokeping_prober_system_group": 13, "smokeping_prober_system_us": 13, "smokeping_prober_target": 13, "smokeping_prober_tls_server_config": 13, "smokeping_prober_web_listen_address": 13, "9374": 13, "smokeping_prober_web_telemetry_path": 13, "snmp_exporter_binary_install_dir": 14, "snmp_exporter_binary_local_dir": 14, "masnmp": 14, "snmp_exporter_vers": 14, "snmp_exporter_binary_url": 14, "_snmp_exporter_repo": 14, "snmp_exporter_checksums_url": 14, "snmp_exporter_config_fil": 14, "empti": 14, "otherwis": 14, "snmp_exporter_log_level": 14, "level": 14, "snmp_exporter_skip_instal": 14, "25": 14, "snmp_exporter_web_listen_address": 14, "9116": 14, "systemd_exporter_binary_install_dir": 15, "systemd_exporter_binary_local_dir": 15, "systemd_exporter_vers": 15, "systemd_exporter_binary_url": 15, "_systemd_exporter_repo": 15, "systemd_exporter_checksums_url": 15, "systemd_exporter_enable_file_descriptor_s": 15, "descriptor": 15, "caus": 15, "need": 15, "access": 15, "proc": 15, "fd": 15, "systemd_exporter_enable_ip_account": 15, "ip": 15, "account": 15, "work": 15, "235": 15, "systemd_exporter_enable_restart_count": 15, "restart": 15, "count": 15, "systemd_exporter_log_level": 15, "systemd_exporter_skip_instal": 15, "systemd_exporter_system_group": 15, "systemd_exporter_system_us": 15, "systemd_exporter_tls_server_config": 15, "systemd_exporter_unit_exclud": 15, "some": 15, "expect": 15, "regex": 15, "systemd_exporter_unit_includ": 15, "6": 15, "systemd_exporter_web_listen_address": 15, "9558": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"prometheu": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "alertmanag": 0, "role": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "servic": 0, "entri": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "point": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "main": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "synopsi": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "paramet": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "author": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "collect": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "link": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "blackbox_export": 1, "deploi": 1, "manag": 1, "blackbox": 1, "export": [1, 3, 8, 9, 12, 14, 15], "cadvisor": 2, "chrony_export": 3, "chroni": 3, "index": [4, 5], "all": 4, "environ": 4, "variabl": 4, "descript": 5, "plugin": 5, "ipmi_export": 6, "memcached_export": 7, "mysqld_export": 8, "mysqld": 8, "node_export": 9, "node": 9, "instal": 10, "configur": 10, "pushgatewai": 11, "smartctl_export": 12, "smartctl": 12, "smokeping_prob": 13, "smokep": 13, "prober": 13, "snmp_export": 14, "snmp": 14, "systemd_export": 15, "systemd": 15}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"prometheus.prometheus.alertmanager role \u2013 Prometheus Alertmanager service": [[0, "prometheus-prometheus-alertmanager-role-prometheus-alertmanager-service"]], "Entry point main \u2013 Prometheus Alertmanager service": [[0, "entry-point-main-prometheus-alertmanager-service"]], "Synopsis": [[0, "synopsis"], [1, "synopsis"], [2, "synopsis"], [3, "synopsis"], [6, "synopsis"], [7, "synopsis"], [8, "synopsis"], [9, "synopsis"], [10, "synopsis"], [11, "synopsis"], [12, "synopsis"], [13, "synopsis"], [14, "synopsis"], [15, "synopsis"]], "Parameters": [[0, "parameters"], [1, "parameters"], [2, "parameters"], [3, "parameters"], [6, "parameters"], [7, "parameters"], [8, "parameters"], [9, "parameters"], [10, "parameters"], [11, "parameters"], [12, "parameters"], [13, "parameters"], [14, "parameters"], [15, "parameters"]], "Authors": [[0, "authors"], [1, "authors"], [2, "authors"], [3, "authors"], [6, "authors"], [7, "authors"], [8, "authors"], [9, "authors"], [10, "authors"], [11, "authors"], [12, "authors"], [13, "authors"], [14, "authors"], [15, "authors"]], "Collection links": [[0, "collection-links"], [1, "collection-links"], [2, "collection-links"], [3, "collection-links"], [6, "collection-links"], [7, "collection-links"], [8, "collection-links"], [9, "collection-links"], [10, "collection-links"], [11, "collection-links"], [12, "collection-links"], [13, "collection-links"], [14, "collection-links"], [15, "collection-links"]], "prometheus.prometheus.blackbox_exporter role \u2013 Deploy and manage Prometheus blackbox exporter": [[1, "prometheus-prometheus-blackbox-exporter-role-deploy-and-manage-prometheus-blackbox-exporter"]], "Entry point main \u2013 Deploy and manage Prometheus blackbox exporter": [[1, "entry-point-main-deploy-and-manage-prometheus-blackbox-exporter"]], "prometheus.prometheus.cadvisor role \u2013 cAdvisor": [[2, "prometheus-prometheus-cadvisor-role-cadvisor"]], "Entry point main \u2013 cAdvisor": [[2, "entry-point-main-cadvisor"]], "prometheus.prometheus.chrony_exporter role \u2013 Prometheus Chrony Exporter": [[3, "prometheus-prometheus-chrony-exporter-role-prometheus-chrony-exporter"]], "Entry point main \u2013 Prometheus Chrony Exporter": [[3, "entry-point-main-prometheus-chrony-exporter"]], "Index of all Collection Environment Variables": [[4, "index-of-all-collection-environment-variables"]], "Prometheus.Prometheus": [[5, "prometheus-prometheus"]], "Description": [[5, "description"]], "Plugin Index": [[5, "plugin-index"]], "Role Index": [[5, "role-index"]], "prometheus.prometheus.ipmi_exporter role \u2013 Prometheus ipmi_exporter": [[6, "prometheus-prometheus-ipmi-exporter-role-prometheus-ipmi-exporter"]], "Entry point main \u2013 Prometheus ipmi_exporter": [[6, "entry-point-main-prometheus-ipmi-exporter"]], "prometheus.prometheus.memcached_exporter role \u2013 Prometheus memcached_exporter": [[7, "prometheus-prometheus-memcached-exporter-role-prometheus-memcached-exporter"]], "Entry point main \u2013 Prometheus memcached_exporter": [[7, "entry-point-main-prometheus-memcached-exporter"]], "prometheus.prometheus.mysqld_exporter role \u2013 Prometheus MySQLd Exporter": [[8, "prometheus-prometheus-mysqld-exporter-role-prometheus-mysqld-exporter"]], "Entry point main \u2013 Prometheus MySQLd Exporter": [[8, "entry-point-main-prometheus-mysqld-exporter"]], "prometheus.prometheus.node_exporter role \u2013 Prometheus Node Exporter": [[9, "prometheus-prometheus-node-exporter-role-prometheus-node-exporter"]], "Entry point main \u2013 Prometheus Node Exporter": [[9, "entry-point-main-prometheus-node-exporter"]], "prometheus.prometheus.prometheus role \u2013 Installs and configures prometheus": [[10, "prometheus-prometheus-prometheus-role-installs-and-configures-prometheus"]], "Entry point main \u2013 Installs and configures prometheus": [[10, "entry-point-main-installs-and-configures-prometheus"]], "prometheus.prometheus.pushgateway role \u2013 Prometheus Pushgateway": [[11, "prometheus-prometheus-pushgateway-role-prometheus-pushgateway"]], "Entry point main \u2013 Prometheus Pushgateway": [[11, "entry-point-main-prometheus-pushgateway"]], "prometheus.prometheus.smartctl_exporter role \u2013 Prometheus Smartctl Exporter": [[12, "prometheus-prometheus-smartctl-exporter-role-prometheus-smartctl-exporter"]], "Entry point main \u2013 Prometheus Smartctl Exporter": [[12, "entry-point-main-prometheus-smartctl-exporter"]], "prometheus.prometheus.smokeping_prober role \u2013 Prometheus Smokeping Prober": [[13, "prometheus-prometheus-smokeping-prober-role-prometheus-smokeping-prober"]], "Entry point main \u2013 Prometheus Smokeping Prober": [[13, "entry-point-main-prometheus-smokeping-prober"]], "prometheus.prometheus.snmp_exporter role \u2013 Prometheus SNMP exporter": [[14, "prometheus-prometheus-snmp-exporter-role-prometheus-snmp-exporter"]], "Entry point main \u2013 Prometheus SNMP exporter": [[14, "entry-point-main-prometheus-snmp-exporter"]], "prometheus.prometheus.systemd_exporter role \u2013 Prometheus Systemd Exporter": [[15, "prometheus-prometheus-systemd-exporter-role-prometheus-systemd-exporter"]], "Entry point main \u2013 Prometheus Systemd Exporter": [[15, "entry-point-main-prometheus-systemd-exporter"]]}, "indexentries": {}})