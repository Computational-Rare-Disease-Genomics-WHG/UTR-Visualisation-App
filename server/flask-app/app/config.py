"""Flask configuration"""


class Config:
    """Main config"""

    SECRET_KEY = 'jtg90458hgy258h02tg85u'
    FLASK_APP = 'app'
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    """Dev local config"""

    DEBUG = True
    PORT = 5000
    VARIANT_DATABASE = 'sqlite:///../../../pipeline/database/test.db'
    FEATURES_DATABASE = 'sqlite:///../../../pipeline/database/features.db'


class ProductionConfig(Config):
    """Prod config"""

    DEBUG = False
    PORT = 8080
    VARIANT_DATABASE = 'sqlite:////test.db'
    FEATURES_DATABASE = 'sqlite:////features.db'


config_by_name = dict(production=ProductionConfig, development=DevelopmentConfig)
