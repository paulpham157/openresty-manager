package main

import (
	"fmt"
	"om/service"

	log "github.com/sirupsen/logrus"
)

const (
	serviceName        = "oms"
	serviceDisplayName = "OpenResty Manager Service"
	serviceDescription = "One powerful manager for OpenResty"
)

// program represents the program that will be launched by as a service or a
// daemon.
type program struct{}

// Start implements service.Interface interface for *program.
func (p *program) Start(_ service.Service) (err error) {
	go p.run()
	return nil
}

func (p *program) run() {
	OMRun()
}

// Stop implements service.Interface interface for *program.
func (p *program) Stop(_ service.Service) error {
	log.Info("shutdown signal received")
	OMStop()
	return nil
}

// "start", "stop", "restart", "install", "uninstall"
func serviceHandler(action string) {
	prg := &program{}
	var s service.Service
	var err error

	svcConfig := &service.Config{
		Name:        serviceName,
		DisplayName: serviceDisplayName,
		Description: serviceDescription,
	}

	svcConfig.Dependencies = []string{"After=network.target syslog.target"}
	options := make(service.KeyValue)
	options["KillMod"] = "process"
	svcConfig.Option = options

	if s, err = service.New(prg, svcConfig); err != nil {
		log.Fatal(err)
	}

	switch action {
	case "run":
		if err = s.Run(); err != nil {
			log.Fatal(err)
		}
	case "status":
		status, err := s.Status()
		if err != nil {
			log.Fatal(err)
		}
		switch status {
		case service.StatusRunning:
			fmt.Println("Running")
		case service.StatusStopped:
			fmt.Println("Stopped")
		}

	default:
		if err = service.Control(s, action); err != nil {
			log.Fatal(err)
		}
		fmt.Println("Success")
	}
}
