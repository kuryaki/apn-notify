# Notify

CLI tool to send push notifications

### Instalation

```
  npm install apn-notify -g
```

### Usage

```
  Usage: index [options] token(s)

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -k, --key [value]    specify key
    -p, --pass [value]   specify passphrase
    -c, --cert [value]   specify certificate
    -a, --alert [value]  specify alert
    -s, --sandbox        is sandbox

```

### Examples

```
    notify -p keyPass iosDeviceToken
```
